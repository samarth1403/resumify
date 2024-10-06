"use client";
import { Button, FormField } from "@/components/SubComponents";
import { validateCoverLetterPersonalInfo } from "@/components/Validation/Validation";
import { dataType } from "@/constants";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const Header = () => {
  const router = useRouter();
  const { data, setData } = useGlobalContext();
  const [errors, setErrors] = useState<Record<string, { message: string }>>({});

  const setFormDataKey = (
    key: string,
    value: string | number | boolean | readonly string[]
  ) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const handleContinue = () => {
    const errors = validateCoverLetterPersonalInfo(data as dataType);
    if (Object.keys(errors).length > 0) {
      toast.error("Please fill all required fields");
      setErrors(errors);
      return;
    }
    toast.success("Personal Info Saved Successfully");
    router.push("/cover-letter/build-letter/create/recruiter-info");
    localStorage.setItem("data", JSON.stringify(data));
    setErrors({});
  };

  return (
    <div className="h-auto w-full ">
      <span className="h6">{`[ Personal Info ]`}</span>
      <div className="flex-start mt-6 w-full flex-wrap gap-4 ">
        <div className="w-48 sm:w-72">
          <FormField
            label="Name"
            type="text"
            name="name"
            value={data?.name || ""}
            setValue={(key, value) => {
              setFormDataKey(
                "initials",
                (value as string)
                  ?.split(" ")
                  ?.map((n) => n[0]?.toUpperCase())
                  ?.join("")
              );
              setFormDataKey(key, value);
            }}
            placeholder="Name"
            className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
            error={errors.name}
            isRequired
            iconPath="/assets/images/person.svg"
          />
        </div>
        <div className="w-48 sm:w-64">
          <FormField
            label="Phone"
            type="number"
            name="phone"
            value={data?.phone || ""}
            setValue={setFormDataKey}
            placeholder="Phone"
            className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
            error={errors.phone}
            isRequired
            iconPath="/assets/images/phone.svg"
          />
        </div>
        <div className="w-full">
          <FormField
            label="Email"
            type="email"
            name="email"
            value={data?.email || ""}
            setValue={setFormDataKey}
            placeholder="Drop Your Email Here"
            className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
            error={errors.email}
            isRequired
            iconPath="/assets/images/mail.svg"
          />
        </div>
        <div className="w-full">
          <FormField
            label="Address"
            type="text"
            name="address"
            value={data?.address || ""}
            setValue={setFormDataKey}
            placeholder="Enter Address"
            className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none "
            error={errors.address}
            isRequired
            iconPath="/assets/images/location.svg"
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
