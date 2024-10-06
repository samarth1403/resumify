"use client";
import { Button, FormField } from "@/components/SubComponents";
import { profileType } from "@/constants";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

const Profiles = () => {
  const router = useRouter();
  const { data, setData } = useGlobalContext();
  const [errors, setErrors] = useState<Record<string, { message: string }>>({});
  const [profiles, setProfiles] = useState<profileType[]>(
    data?.profiles || [
      {
        profile: "",
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
      profiles: [
        ...prev.profiles!.slice(0, index),
        { ...prev?.profiles!?.[index], [key]: value },
        ...prev?.profiles!?.slice(index + 1),
      ],
    }));
    setProfiles((prev) => [
      ...prev.slice(0, index),
      { ...prev?.[index], [key]: value },
      ...prev.slice(index + 1),
    ]);
  };

  const handleContinue = () => {
    toast.success("Profiles Info Saved Successfully");
    router.push("/resume/build-resume/preview");
    localStorage.setItem("data", JSON.stringify(data));
    setErrors({});
  };

  const handleAddOneMore = () => {
    setProfiles((prev) => [
      ...prev,
      {
        profile: "",
        link: "",
      },
    ]);
    setData((prev) => ({
      ...prev,
      profiles: [
        ...prev.profiles!,
        {
          profile: "",
          link: "",
        },
      ],
    }));
  };

  const handleSkip = () => {
    setProfiles([]);
    setData((prev) => ({ ...prev, profiles: [] }));
    router.push("/resume/build-resume/preview");
  };

  const handleOnDeleteExperience = (index: number) => {
    setProfiles((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
    setData((prev) => ({
      ...prev,
      profiles: [
        ...prev.profiles!.slice(0, index),
        ...prev.profiles!.slice(index + 1),
      ],
    }));
  };

  return (
    <div className="flex h-auto w-full flex-col items-center justify-center gap-2 sm:gap-4 ">
      <div className="flex w-full items-center justify-between gap-2 ">
        <span className="h6">{`[ Profiles Info ]`}</span>
        <Button onClick={handleSkip} className=" bg-gray-700 py-[6px]">
          Skip
        </Button>
      </div>
      <div className="flex flex-col items-start justify-start gap-4 ">
        {profiles?.map((profile, index) => (
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
                  name="profile"
                  value={profile?.profile}
                  setValue={(key, value) => setFormDataKey(key, value, index)}
                  placeholder="Profile"
                  className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
                  error={errors.profile}
                  isRequired
                  iconPath="/assets/images/logo.svg"
                  iconFromTop="top-3"
                />
              </div>
              <div className="w-48 sm:w-64">
                <FormField
                  // label="Company Name"
                  type="text"
                  name="link"
                  value={profile?.link}
                  setValue={(key, value) => setFormDataKey(key, value, index)}
                  placeholder="Project Link"
                  className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
                  error={errors?.link}
                  isRequired
                  iconPath="/assets/images/internet.svg"
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
        {data?.profiles!?.length > 0 && (
          <Button onClick={handleContinue}>Save & Continue</Button>
        )}
      </div>
    </div>
  );
};

export default Profiles;
