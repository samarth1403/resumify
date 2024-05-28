"use client";
import { Button, FormHeading, TextAreaField } from "@/components/SubComponents";
import { validateCoverLetterCloser } from "@/components/Validation/Validation";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Closer = () => {
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
    const errors = validateCoverLetterCloser(coverLetterData);
    if (Object.keys(errors).length > 0) {
      toast.error("Please fill required field");
      setErrors(errors);
      return;
    }
    router.push("/cover-letter/build-letter/preview");
    localStorage.setItem("coverLetterData", JSON.stringify(coverLetterData));
    setErrors({});
  };

  return (
    <div className="h-auto w-full ">
      <FormHeading title={`[ Closer of Cover Letter ]`} />
      <div className="flex-start mt-6 w-full flex-wrap gap-6 ">
        <div className="w-full">
          <TextAreaField
            name="coverLetterCloser"
            value={coverLetterData.coverLetterCloser!}
            setValue={setFormDataKey}
            rows={6}
            label="Closer"
            placeholder="Write closer for Cover Letter ..."
            className={`w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none`}
            isRequired
            error={errors.coverLetterCloser}
          />
        </div>
        <div className="mt-4 flex w-full flex-row flex-wrap items-center justify-between">
          <Button
            onClick={() =>
              router.push("/cover-letter/build-letter/create/body")
            }
            iconBefore={<IoIosArrowRoundBack size={24} />}
            className="pl-3"
          >
            Previous
          </Button>
          <Button
            onClick={handleContinue}
            iconAfter={<IoIosArrowRoundForward size={24} />}
            className="border border-black bg-yellow-400 pr-3 text-black "
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Closer;
