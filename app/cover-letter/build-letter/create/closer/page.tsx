"use client";
import { Button, FormHeading, TextAreaField } from "@/components/SubComponents";
import { validateCoverLetter } from "@/components/Validation/Validation";
import { useGlobalContext } from "@/context/GlobalProvider";
import axios, { isAxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Closer = () => {
  const router = useRouter();

  const [isFormSubmitting, setFormIsSubmitting] = useState<boolean>(false);
  const { coverLetterData, setCoverLetterData, selectedTemplateId, user } =
    useGlobalContext();
  const [errors, setErrors] = useState<Record<string, { message: string }>>({});

  const setFormDataKey = (
    key: string,
    value: string | number | boolean | readonly string[]
  ) => {
    setCoverLetterData((prev) => ({ ...prev, [key]: value }));
  };

  console.log(user);

  const handleContinue = async () => {
    const { errors, errorTab } = validateCoverLetter(coverLetterData);
    console.log(errors, errorTab);
    if (Object.keys(errors).length > 0) {
      toast.error("Please fill required field");
      setErrors(errors);
      router.push(`/cover-letter/build-letter/create/${errorTab}`);
      return;
    }
    router.push("/cover-letter/build-letter/preview");
    localStorage.setItem("coverLetterData", JSON.stringify(coverLetterData));
    setErrors({});

    setFormIsSubmitting(true);
    try {
      const { data, status } = await axios.post("/api/document/create", {
        type: "cover-letter",
        userData: coverLetterData,
        user: user?.userId,
        template: selectedTemplateId,
      });
      if (status === 201) {
        toast.success(data.message);
        // router.push("/");
      }
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data?.error || "An error occurred");
      } else {
        toast.error("An error occurred");
      }
    } finally {
      setFormIsSubmitting(false);
      setErrors({});
    }
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
            // className="border border-black bg-yellow-400 pr-3 text-black "
            isFormSubmitting={isFormSubmitting}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Closer;
