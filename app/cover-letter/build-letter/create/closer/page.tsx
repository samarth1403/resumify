"use client";
import { Button, FormHeading, TextAreaField } from "@/components/SubComponents";
import { validateCoverLetter } from "@/components/Validation/Validation";
import { dataType } from "@/constants";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Closer = () => {
  const router = useRouter();

  const { data, setData } = useGlobalContext();
  const [errors, setErrors] = useState<Record<string, { message: string }>>({});

  const setFormDataKey = (
    key: string,
    value: string | number | boolean | readonly string[]
  ) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const handleContinue = async () => {
    const { errors, errorTab } = validateCoverLetter(data as dataType);
    console.log(errors, errorTab);
    if (Object.keys(errors).length > 0) {
      toast.error("Please fill required field");
      setErrors(errors);
      router.push(`/cover-letter/build-letter/create/${errorTab}`);
      return;
    }
    router.push("/cover-letter/build-letter/preview");
    localStorage.setItem("data", JSON.stringify(data));
    setErrors({});
  };

  return (
    <div className="h-auto w-full ">
      <FormHeading title={`[ Closer of Cover Letter ]`} />
      <div className="flex-start mt-6 w-full flex-wrap gap-6 ">
        <div className="w-full">
          <TextAreaField
            name="coverLetterCloser"
            value={data.coverLetterCloser! || ""}
            setValue={setFormDataKey}
            rows={6}
            label="Closer"
            placeholder="Write closer for Cover Letter ..."
            className={`w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none`}
            isRequired
            error={errors.coverLetterCloser}
            iconPath="/assets/images/comment.svg"
            iconFromTop="top-10"
          />
        </div>
        <div className="mt-4 flex w-full flex-row flex-wrap items-center justify-center gap-2 max-[320px]:gap-4 min-[375px]:justify-between">
          <Button
            onClick={() =>
              router.push("/cover-letter/build-letter/create/body")
            }
            iconBefore={<IoIosArrowRoundBack size={24} />}
            className="pl-3"
          ></Button>
          <Button
            onClick={handleContinue}
            iconAfter={<IoIosArrowRoundForward size={24} />}
            // className="border border-black bg-yellow-400 pr-3 text-black "
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Closer;
