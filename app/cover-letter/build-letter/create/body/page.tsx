"use client";
import { Button, FormHeading, TextAreaField } from "@/components/SubComponents";
import { validateCoverLetterBody } from "@/components/Validation/Validation";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Body = () => {
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
    const errors = validateCoverLetterBody(coverLetterData);
    if (Object.keys(errors).length > 0) {
      toast.error("Please fill required field");
      setErrors(errors);
      return;
    }
    toast.success("Body of the Cover Letter Saved Successfully");
    router.push("/cover-letter/build-letter/create/closer");
    localStorage.setItem("coverLetterData", JSON.stringify(coverLetterData));
    setErrors({});
  };

  return (
    <div className="h-auto w-full ">
      <FormHeading title={`[ Body of Cover Letter ]`} />
      <div className="flex-start mt-6 w-full flex-wrap gap-6 ">
        <div className="w-full">
          <TextAreaField
            name="coverLetterBody1"
            value={coverLetterData.coverLetterBody1!}
            setValue={setFormDataKey}
            rows={6}
            label="Body 1"
            placeholder="Write here if you want to add more content..."
            className={`w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none`}
            isRequired
            error={errors.coverLetterBody1}
          />
        </div>
        <div className="w-full">
          <TextAreaField
            name="coverLetterBody2"
            value={coverLetterData.coverLetterBody2!}
            setValue={setFormDataKey}
            rows={6}
            label="Body 2"
            placeholder="Write here if you want to add more content..."
            className={`w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none`}
          />
        </div>
        <div className="mt-4 flex w-full flex-row flex-wrap items-center justify-between">
          <Button
            onClick={() =>
              router.push("/cover-letter/build-letter/create/opener")
            }
            iconBefore={<IoIosArrowRoundBack size={24} />}
            className="pl-3"
          >
            Previous
          </Button>
          <Button
            onClick={handleContinue}
            iconAfter={<IoIosArrowRoundForward size={24} />}
            className="pr-3"
          >
            Save &nbsp; & &nbsp; Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Body;
