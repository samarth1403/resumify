"use client";
import { Button, FormField } from "@/components/SubComponents";
import { validateCoverLetterPersonalInfo } from "@/components/Validation/Validation";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const Header = () => {
  const router = useRouter();
  const { coverLetterData, setCoverLetterData } = useGlobalContext();
  const [errors, setErrors] = useState<Record<string, { message: string }>>({});

  const setFormDataKey = (
    key: string,
    value: string | number | boolean | readonly string[]
  ) => {
    setCoverLetterData((prev) => ({ ...prev, [key]: value }));
  };

  const handleContinue = () => {
    const errors = validateCoverLetterPersonalInfo(coverLetterData);
    if (Object.keys(errors).length > 0) {
      toast.error("Please fill all required fields");
      setErrors(errors);
      return;
    }
    toast.success("Personal Info Saved Successfully");
    router.push("/cover-letter/build-letter/create/recruiter-info");
    localStorage.setItem("coverLetterData", JSON.stringify(coverLetterData));
    setErrors({});
  };

  return (
    <div className="h-auto w-full ">
      {/* <Heading
        title="Let’s start with your header"
        text="Your name will be in the heading and signature of your letter."
        className="mb-8 text-[0.6rem]"
      /> */}
      <span className="h6">{`[ Personal Info ]`}</span>
      <div className="flex-start mt-6 w-full flex-wrap gap-5 ">
        <div className={`flex-start w-64 flex-col gap-[5px]`}>
          <label htmlFor={"name"}>
            {"Name"}
            {<span className="ml-1 text-red-500">*</span>}
          </label>
          <input
            id={"name"}
            type={"text"}
            value={coverLetterData.name}
            onChange={(e) => {
              setFormDataKey("name", e.target.value);
              setFormDataKey(
                "initials",
                e.target.value
                  .split(" ")
                  .map((n) => n[0]?.toUpperCase())
                  .join("")
              );
            }}
            placeholder={"Name"}
            className={`w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none`}
          />
          {errors.name && (
            <span className="text-[0.85rem] text-red-700">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="w-48">
          <FormField
            label="Phone"
            type="number"
            name="phone"
            value={coverLetterData.phone}
            setValue={setFormDataKey}
            placeholder="Phone"
            className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
            error={errors.phone}
            isRequired
          />
        </div>
        <div className="w-full">
          <FormField
            label="Email"
            type="email"
            name="email"
            value={coverLetterData.email}
            setValue={setFormDataKey}
            placeholder="Drop Your Email Here"
            className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
            error={errors.email}
            isRequired
          />
        </div>
        <div className="w-full">
          <FormField
            label="Address"
            type="text"
            name="address"
            value={coverLetterData.address}
            setValue={setFormDataKey}
            placeholder="Enter Address"
            className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none "
            error={errors.address}
            isRequired
          />
        </div>
        <div className="mt-4 flex w-full flex-row flex-wrap items-center justify-end">
          <Button onClick={handleContinue}>
            Save &nbsp; & &nbsp; Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
