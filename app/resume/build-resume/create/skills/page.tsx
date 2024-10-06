"use client";
import { Button, TextAreaField } from "@/components/SubComponents";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const Skills = () => {
  const router = useRouter();
  const { data, setData } = useGlobalContext();
  const [errors, setErrors] = useState<Record<string, { message: string }>>({});

  const setFormDataKey = (
    key: string,
    value: string | number | boolean | readonly string[]
  ) => {
    setData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleContinue = () => {
    toast.success("Skills Info Saved Successfully");
    router.push("/resume/build-resume/create/profiles");
    localStorage.setItem("data", JSON.stringify(data));
    setErrors({});
  };

  const handleSkip = () => {
    setData((prev) => ({ ...prev, skills: [] }));
    router.push("/resume/build-resume/create/profiles");
  };

  return (
    <div className="flex h-auto w-full flex-col items-center justify-center gap-2 sm:gap-4 ">
      <div className="flex w-full items-center justify-between gap-2 ">
        <span className="h6">{`[ Skills Info ]`}</span>
        <Button onClick={handleSkip} className=" bg-gray-700 py-[6px]">
          Skip
        </Button>
      </div>
      <div className="flex-start w-full flex-wrap gap-4 ">
        <div className="w-full">
          <div
            className="flex w-full cursor-pointer items-center justify-end"
            onClick={() => setData((prev) => ({ ...prev, skills: [] }))}
          >
            <p>Clear</p>
          </div>
          <TextAreaField
            label="Skills"
            name="skills"
            value={data?.skills?.join(",") || ""}
            setValue={(key, value) => setFormDataKey(key, value?.split(","))}
            placeholder={`Add Skills separated by , ( quamma )`}
            className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
            error={errors?.skills}
            rows={3}
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-end ">
        <Button onClick={handleContinue}>Save & Continue</Button>
      </div>
    </div>
  );
};

export default Skills;
