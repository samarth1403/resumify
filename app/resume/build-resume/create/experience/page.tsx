"use client";
import { Button, FormField } from "@/components/SubComponents";
import { experienceType } from "@/constants";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

const Experience = () => {
  const router = useRouter();
  const { data, setData } = useGlobalContext();
  const [errors, setErrors] = useState<Record<string, { message: string }>>({});
  const [experiences, setExperiences] = useState<experienceType[]>(
    data?.experience || [
      {
        company: "",
        jobTitle: "",
        startDate: "",
        endDate: "",
        jobDescription: "",
      },
    ]
  );

  const setFormDataKey = (
    key: string,
    value: string | number | boolean | readonly string[],
    index: number
  ) => {
    console.log({ key, value, index });
    setData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience!.slice(0, index),
        { ...prev?.experience!?.[index], [key]: value },
        ...prev?.experience!?.slice(index + 1),
      ],
    }));
    setExperiences((prev) => [
      ...prev.slice(0, index),
      { ...prev?.[index], [key]: value },
      ...prev.slice(index + 1),
    ]);
  };

  const handleContinue = () => {
    toast.success("Experience Info Saved Successfully");
    router.push("/resume/build-resume/create/education");
    localStorage.setItem("data", JSON.stringify(data));
    setErrors({});
  };

  const handleAddOneMore = () => {
    setExperiences((prev) => [
      ...prev,
      {
        company: "",
        jobTitle: "",
        startDate: "",
        endDate: "",
        jobDescription: "",
      },
    ]);
    setData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience!,
        {
          company: "",
          jobTitle: "",
          startDate: "",
          endDate: "",
          jobDescription: "",
        },
      ],
    }));
  };

  const handleOnDeleteExperience = (index: number) => {
    setExperiences((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1),
    ]);
    setData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience!.slice(0, index),
        ...prev.experience!.slice(index + 1),
      ],
    }));
  };

  const handleSkip = () => {
    setExperiences([]);
    setData((prev) => ({ ...prev, experience: [] }));
    router.push("/resume/build-resume/create/education");
  };

  return (
    <div className="flex h-auto w-full flex-col items-center justify-center gap-2 sm:gap-4 ">
      <div className="flex w-full items-center justify-between gap-2 ">
        <span className="h6">{`[ Experience Info ]`}</span>
        <Button onClick={handleSkip} className=" bg-gray-700 py-[6px]">
          Skip
        </Button>
      </div>
      <div className="flex flex-col items-start justify-start gap-4 ">
        {experiences?.map((experience, index) => (
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
                  name="jobTitle"
                  value={experience?.jobTitle}
                  setValue={(key, value) => setFormDataKey(key, value, index)}
                  placeholder="Designation"
                  className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
                  error={errors.jobTitle}
                  isRequired
                  iconPath="/assets/images/rocket.svg"
                  iconFromTop="top-3"
                />
              </div>
              <div className="w-full sm:w-64">
                <FormField
                  // label="Company Name"
                  type="text"
                  name="company"
                  value={experience?.company}
                  setValue={(key, value) => setFormDataKey(key, value, index)}
                  placeholder="Company"
                  className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
                  error={errors.company}
                  isRequired
                  iconPath="/assets/images/company.svg"
                  iconFromTop="top-3"
                />
              </div>
              <div className="w-full sm:w-72">
                <FormField
                  // label="Start Date"
                  type="text"
                  name="startDate"
                  value={experience?.startDate}
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
                  value={experience?.endDate}
                  setValue={(key, value) => setFormDataKey(key, value, index)}
                  placeholder="Ended on"
                  className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
                  error={errors.endDate}
                  iconPath="/assets/images/calender.svg"
                  iconFromTop="top-3"
                />
              </div>
              <div className="w-full">
                <FormField
                  // label="Description"
                  type="text"
                  name="jobDescription"
                  value={experience.jobDescription}
                  setValue={(key, value) => setFormDataKey(key, value, index)}
                  placeholder="Description"
                  className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
                  error={errors?.jobDescription}
                  isRequired
                  iconPath="/assets/images/comment.svg"
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
        {data?.experience!?.length > 0 && (
          <Button onClick={handleContinue}>Continue</Button>
        )}
      </div>
    </div>
  );
};

export default Experience;
