"use client";
import { Button, FormHeading, TextAreaField } from "@/components/SubComponents";
import { validateCoverLetterOpener } from "@/components/Validation/Validation";
import { dataType } from "@/constants";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Opener = () => {
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
    const errors = validateCoverLetterOpener(data as dataType);
    if (Object.keys(errors).length > 0) {
      toast.error("Please fill required field");
      setErrors(errors);
      return;
    }
    toast.success("Opener of Cover Letter Saved Successfully");
    router.push("/cover-letter/build-letter/create/body");
    localStorage.setItem("data", JSON.stringify(data));
    setErrors({});
  };

  return (
    <div className="h-auto w-full ">
      <FormHeading title={`[ Opening of Cover Letter ]`} />
      <div className="flex-start mt-6 w-full flex-wrap gap-6 ">
        <div className="w-full">
          <TextAreaField
            name="coverLetterOpener"
            value={data.coverLetterOpener! || ""}
            setValue={setFormDataKey}
            rows={8}
            label="Opener"
            placeholder="Write your opener here..."
            error={errors.coverLetterOpener}
            className={`w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none`}
            isRequired
            iconPath="/assets/images/comment.svg"
            iconFromTop="top-10"
          />
        </div>
        <div className="mt-4 flex w-full flex-row flex-wrap items-center justify-center gap-2 max-[320px]:gap-4 min-[375px]:justify-between">
          <Button
            onClick={() =>
              router.push("/cover-letter/build-letter/create/recruiter-info")
            }
            iconBefore={<IoIosArrowRoundBack size={24} />}
            className="pl-3"
          ></Button>
          <Button
            onClick={handleContinue}
            iconAfter={<IoIosArrowRoundForward size={24} />}
            className="pr-3"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Opener;
