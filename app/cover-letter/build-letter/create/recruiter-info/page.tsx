"use client";
import { Button, FormField } from "@/components/SubComponents";
import { validateCoverLetterRecruiterInfo } from "@/components/Validation/Validation";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const RecruiterInfo = () => {
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
    const errors = validateCoverLetterRecruiterInfo(coverLetterData);
    if (Object.keys(errors).length > 0) {
      toast.error("Please fill all required fields");
      setErrors(errors);
      return;
    }
    toast.success("Recruiter Info Saved Successfully");
    router.push("/cover-letter/build-letter/create/opener");
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
      <span className="h6">{`[ Recruiter Info ]`}</span>
      <div className="flex-start mt-6 w-full flex-wrap gap-6 ">
        <div className="w-48">
          <FormField
            label="Name"
            type="text"
            name="recruiterName"
            value={coverLetterData.recruiterName!}
            setValue={setFormDataKey}
            placeholder="Recruiter Name"
            className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
            error={errors.recruiterName}
            isRequired
          />
        </div>
        <div className="w-48">
          <FormField
            label="Position"
            type="text"
            name="recruiterPosition"
            value={coverLetterData.recruiterPosition!}
            setValue={setFormDataKey}
            placeholder="Designation of Recruiter"
            className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
          />
        </div>
        <div className="w-full">
          <FormField
            label="Company"
            type="text"
            name="hiringCompanyName"
            value={coverLetterData.hiringCompanyName!}
            setValue={setFormDataKey}
            placeholder="Enter Hiring Company Name"
            className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
            error={errors.hiringCompanyName}
            isRequired
          />
        </div>
        <div className="w-full">
          <FormField
            label="Comapny Address"
            type="text"
            name="hiringCompanyAddress"
            value={coverLetterData.hiringCompanyAddress!}
            setValue={setFormDataKey}
            placeholder="Enter Hiring Company's Address"
            className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none "
            error={errors.hiringCompanyAddress}
            isRequired
          />
        </div>
        <div className="mt-4 flex w-full flex-row flex-wrap items-center justify-between">
          <Button
            onClick={() =>
              router.push("/cover-letter/build-letter/create/header")
            }
            iconBefore={<IoIosArrowRoundBack size={24} />}
          >
            Previous
          </Button>
          <Button
            onClick={handleContinue}
            iconAfter={<IoIosArrowRoundForward size={24} />}
          >
            Save &nbsp; & &nbsp; Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecruiterInfo;
