"use client";
import { Button, FormField } from "@/components/SubComponents";
import { educationType } from "@/constants";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

const Education = () => {
  const router = useRouter();
  const { data, setData } = useGlobalContext();
  const [errors, setErrors] = useState<Record<string, { message: string }>>({});
  const [educations, setEducations] = useState<educationType[]>(
    data?.education || [
      {
        institution: "",
        degree: "",
        description: "",
        endDate: "",
        startDate: "",
      },
    ]
  );

  const setFormDataKey = (
    key: string,
    value: string | number | boolean | readonly string[],
    index: number
  ) => {
    setData((prev) => ({
      ...prev,
      education: [
        ...prev.education!.slice(0, index),
        { ...prev?.education!?.[index], [key]: value },
        ...prev?.education!?.slice(index + 1),
      ],
    }));
    setEducations((prev) => [
      ...prev.slice(0, index),
      { ...prev?.[index], [key]: value },
      ...prev.slice(index + 1),
    ]);
  };

  const handleContinue = () => {
    toast.success("Education Info Saved Successfully");
    router.push("/resume/build-resume/create/projects");
    localStorage.setItem("data", JSON.stringify(data));
    setErrors({});
  };

  const handleAddOneMore = () => {
    setEducations((prev) => [
      ...prev,
      {
        institution: "",
        degree: "",
        description: "",
        endDate: "",
        startDate: "",
      },
    ]);
    setData((prev) => ({
      ...prev,
      education: [
        ...prev.education!,
        {
          institution: "",
          degree: "",
          description: "",
          endDate: "",
          startDate: "",
        },
      ],
    }));
  };

  const handleOnDeleteExperience = (index: number) => {
    setEducations((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1),
    ]);
    setData((prev) => ({
      ...prev,
      education: [
        ...prev.education!.slice(0, index),
        ...prev.education!.slice(index + 1),
      ],
    }));
  };

  const handleSkip = () => {
    setEducations([]);
    setData((prev) => ({ ...prev, education: [] }));
    router.push("/resume/build-resume/create/projects");
  };

  return (
    <div className="flex h-auto w-full flex-col items-center justify-center gap-2 sm:gap-4 ">
      <div className="flex w-full items-center justify-between gap-2 ">
        <span className="h6">{`[ Education Info ]`}</span>
        <Button onClick={handleSkip} className=" bg-gray-700 py-[6px]">
          Skip
        </Button>
      </div>
      <div className="flex flex-col items-start justify-start gap-4 ">
        {educations?.map((education, index) => (
          <div
            key={index}
            className="flex w-full flex-col items-center justify-center gap-4 py-2 sm:py-4"
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex size-8 items-center justify-center rounded-full p-1">
                <p className="text-lg font-semibold text-black">{`${index + 1}]`}</p>
              </div>
              <MdDelete
                size={24}
                onClick={() => handleOnDeleteExperience(index)}
                cursor={"pointer"}
              />
            </div>
            <div className="flex-start w-full flex-wrap gap-4 " key={index}>
              <div className="w-full sm:w-72">
                <FormField
                  // label="Designation Name"
                  type="text"
                  name="institution"
                  value={education?.institution}
                  setValue={(key, value) => setFormDataKey(key, value, index)}
                  placeholder="Institution"
                  className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
                  error={errors.institution}
                  isRequired
                  iconPath="/assets/images/company.svg"
                  iconFromTop="top-3"
                />
              </div>
              <div className="w-full sm:w-64">
                <FormField
                  // label="Company Name"
                  type="text"
                  name="degree"
                  value={education?.degree}
                  setValue={(key, value) => setFormDataKey(key, value, index)}
                  placeholder="Degree"
                  className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
                  error={errors?.degree}
                  isRequired
                  iconPath="/assets/images/book.svg"
                  iconFromTop="top-3"
                />
              </div>
              <div className="w-full sm:w-72">
                <FormField
                  // label="Start Date"
                  type="text"
                  name="startDate"
                  value={education?.startDate}
                  setValue={(key, value) => setFormDataKey(key, value, index)}
                  placeholder="Started on"
                  className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
                  error={errors.startDate}
                  isRequired
                  iconPath="/assets/images/calender.svg"
                  iconFromTop="top-3"
                />
              </div>
              <div className="w-full sm:w-64">
                <FormField
                  // label="End Date"
                  type="text"
                  name="endDate"
                  value={education?.endDate}
                  setValue={(key, value) => setFormDataKey(key, value, index)}
                  placeholder="Ended on"
                  className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
                  error={errors.endDate}
                  isRequired
                  iconPath="/assets/images/calender.svg"
                  iconFromTop="top-3"
                />
              </div>
              <div className="w-full">
                <FormField
                  // label="Description"
                  type="text"
                  name="description"
                  value={education?.description}
                  setValue={(key, value) => setFormDataKey(key, value, index)}
                  placeholder="Description / Marks"
                  className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
                  error={errors?.description}
                  isRequired
                  iconPath="/assets/images/target.svg"
                  iconFromTop="top-3"
                />
              </div>
            </div>
            <hr className="h-[2px] w-full bg-black" />
          </div>
        ))}
      </div>
      <div className="flex w-full items-center justify-between ">
        <Button onClick={handleAddOneMore}>Add +</Button>
        {data?.education!?.length > 0 && (
          <Button onClick={handleContinue}>Continue</Button>
        )}
      </div>
    </div>
  );
};

export default Education;
