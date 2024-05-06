"use client";
import Button from "@/components/SubComponents/Button";
import FormField from "@/components/SubComponents/FormField";
import Heading from "@/components/SubComponents/Heading";
import Section from "@/components/SubComponents/Section";
import { validateSignUp } from "@/components/Validation/Validation";
import axios, { isAxiosError } from "axios";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface formDataTypes {
  username: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const [isFormSubmitting, setFormIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState<formDataTypes>({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, { message: string }>>({});

  const setFormDataKey = (
    key: string,
    value: string | number | boolean | readonly string[]
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    const errors = validateSignUp(formData);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    setFormIsSubmitting(true);
    try {
      const { data, status } = await axios.post("/api/user/sign-up", formData);
      if (status === 200) {
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
    <Section
      className="mt-12 w-full"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="flex-center mt-4 w-full flex-col  lg:mt-4 xl:mt-6">
        <Heading title={`Get Started Today !`} className="mb-4" />
        <div className="flex-center h-auto w-72 flex-col gap-4 rounded-xl bg-white px-4 py-2 shadow-2xl shadow-shades-6 lg:w-96 lg:px-8 lg:py-6 ">
          <FormField
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            setValue={setFormDataKey}
            placeholder="Username"
            className="w-full rounded-lg border-2 border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
            error={errors.username}
          />
          <FormField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            setValue={setFormDataKey}
            placeholder="Drop Your Email Here"
            className="w-full rounded-lg border-2 border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
            error={errors.email}
          />
          <FormField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            setValue={setFormDataKey}
            placeholder="Password"
            className="w-full rounded-lg border-2 border-shades-4 p-3 focus:border-shades-8 focus:outline-none"
            error={errors.password}
          />
          <Button
            onClick={handleSubmit}
            className="w-full"
            isFormSubmitting={isFormSubmitting}
          >
            Sign Up
          </Button>
          <Link href={"/sign-in"}>
            <p className="body-2">
              {`Already have an Account ? `} &nbsp;
              <span className="text-blue-600">Sign In</span>{" "}
            </p>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default SignUp;
