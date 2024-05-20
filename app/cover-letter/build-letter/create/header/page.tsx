"use client";
import { FormField, Heading } from "@/components/SubComponents";
import { useGlobalContext } from "@/context/GlobalProvider";
import React, { useState } from "react";

const Header = () => {
  const { coverLetterData, setCoverLetterData } = useGlobalContext();
  const [errors, setErrors] = useState<Record<string, { message: string }>>({});

  const setFormDataKey = (
    key: string,
    value: string | number | boolean | readonly string[]
  ) => {
    setCoverLetterData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="h-auto w-full ">
      {/* <Heading
        title="Let’s start with your header"
        text="Your name will be in the heading and signature of your letter."
        className="mb-8"
      /> */}
      <div className="flex-start w-full flex-wrap gap-6 ">
        <div className={`flex-start w-52 flex-col gap-[5px]`}>
          <label htmlFor={"name"}>
            {"Name"}
            {<span className="ml-1 text-red-500">*</span>}
          </label>
          <input
            id={"name"}
            type={"text"}
            value={coverLetterData.name}
            onChange={(e) => {
              setFormDataKey("name", e.target.value);
              setFormDataKey(
                "initials",
                e.target.value
                  .split(" ")
                  .map((n) => n[0]?.toUpperCase())
                  .join("")
              );
            }}
            placeholder={"Name"}
            className={`w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none`}
          />
          {errors.name && (
            <span className="text-[0.85rem] text-red-700">
              {errors.error.message}
            </span>
          )}
        </div>
        <FormField
          label="Phone"
          type="number"
          name="phone"
          value={coverLetterData.phone}
          setValue={setFormDataKey}
          placeholder="Phone"
          className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
          error={errors.phone}
          isRequired
          divClassName="w-52"
        />
        <FormField
          label="Email"
          type="email"
          name="email"
          value={coverLetterData.email}
          setValue={setFormDataKey}
          placeholder="Drop Your Email Here"
          className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
          error={errors.email}
          isRequired
          divClassName="w-80"
        />

        <FormField
          label="Address"
          type="text"
          name="address"
          value={coverLetterData.address}
          setValue={setFormDataKey}
          placeholder="Enter Address"
          className="w-full rounded-lg border border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
          error={errors.address}
          isRequired
          divClassName="w-80"
        />
      </div>
    </div>
  );
};

export default Header;
