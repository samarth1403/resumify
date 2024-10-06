"use client";
import { Button, FormField } from "@/components/SubComponents";
import { projectType } from "@/constants";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

const Projects = () => {
  const router = useRouter();
  const { data, setData } = useGlobalContext();
  const [errors, setErrors] = useState<Record<string, { message: string }>>({});
  const [projects, setProjects] = useState<projectType[]>(
    data?.projects || [
      {
        title: "",
        description: "",
        link: "",
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
      projects: [
        ...prev.projects!.slice(0, index),
        { ...prev?.projects!?.[index], [key]: value },
        ...prev?.projects!?.slice(index + 1),
      ],
    }));
    setProjects((prev) => [
      ...prev.slice(0, index),
      { ...prev?.[index], [key]: value },
      ...prev.slice(index + 1),
    ]);
  };

  const handleContinue = () => {
    toast.success("Projects Info Saved Successfully");
    router.push("/resume/build-resume/create/skills");
    localStorage.setItem("data", JSON.stringify(data));
    setErrors({});
  };

  const handleAddOneMore = () => {
    setProjects((prev) => [
      ...prev,
      {
        title: "",
        description: "",
        link: "",
      },
    ]);
    setData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects!,
        {
          title: "",
          description: "",
          link: "",
        },
      ],
    }));
  };

  const handleSkip = () => {
    setProjects([]);
    setData((prev) => ({ ...prev, projects: [] }));
    router.push("/resume/build-resume/create/skills");
  };

  const handleOnDeleteExperience = (index: number) => {
    setProjects((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
    setData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects!.slice(0, index),
        ...prev.projects!.slice(index + 1),
      ],
    }));
  };

  return (
    <div className="flex h-auto w-full flex-col items-center justify-center gap-2 sm:gap-4 ">
      <div className="flex w-full items-center justify-between gap-2 ">
        <span className="h6">{`[ Projects Info ]`}</span>
        <Button onClick={handleSkip} className=" bg-gray-700 py-[6px]">
          Skip
        </Button>
      </div>
      <div className="flex flex-col items-start justify-start gap-4 ">
        {projects?.map((project, index) => (
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
              <div className="w-48 sm:w-72">
                <FormField
                  // label="Designation Name"
                  type="text"
                  name="title"
                  value={project?.title}
                  setValue={(key, value) => setFormDataKey(key, value, index)}
                  placeholder="Project Title"
                  className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
                  error={errors.title}
                  isRequired
                  iconPath="/assets/images/rocket.svg"
                  iconFromTop="top-3"
                />
              </div>
              <div className="w-48 sm:w-64">
                <FormField
                  // label="Company Name"
                  type="text"
                  name="link"
                  value={project?.link}
                  setValue={(key, value) => setFormDataKey(key, value, index)}
                  placeholder="Project Link"
                  className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
                  error={errors?.link}
                  isRequired
                  iconPath="/assets/images/internet.svg"
                  iconFromTop="top-3"
                />
              </div>
              <div className="w-full">
                <FormField
                  // label="Description"
                  type="text"
                  name="description"
                  value={project?.description}
                  setValue={(key, value) => setFormDataKey(key, value, index)}
                  placeholder="Description"
                  className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
                  error={errors?.description}
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
        {data?.projects!?.length > 0 && (
          <Button onClick={handleContinue}>Save & Continue</Button>
        )}
      </div>
    </div>
  );
};

export default Projects;
