"use client";
import {
  Button,
  FormField,
  Heading,
  Section,
} from "@/components/SubComponents";
import { validateSignIn } from "@/components/Validation/Validation";
import axios, { isAxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface formDataTypes {
  email: string;
  password: string;
}

const SignIn = () => {
  const [isFormSubmitting, setFormIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState<formDataTypes>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, { message: string }>>({});
  const router = useRouter();

  const setFormDataKey = (
    key: string,
    value: string | number | boolean | readonly string[]
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    const errors = validateSignIn(formData);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    setFormIsSubmitting(true);
    try {
      const { data, status } = await axios.post("/api/user/sign-in", formData);
      if (status === 200) {
        toast.success(data.message);
        router.push("/");
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
      <div className="flex-center mt-4 w-full flex-col lg:mt-4 xl:mt-6">
        <Heading title={`Welcome back !`} className="mb-4" />
        <div className="flex-center h-auto w-72 flex-col gap-5 rounded-xl bg-white p-4 shadow-2xl shadow-shades-6 lg:w-96 lg:p-6 ">
          <FormField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            setValue={setFormDataKey}
            placeholder="Drop Your Email Here"
            className="w-full rounded-lg border-2 border-shades-4 p-4 focus:border-shades-8 focus:outline-none"
            error={errors.email}
          />
          <FormField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            setValue={setFormDataKey}
            placeholder="Password"
            className="w-full rounded-lg border-2 border-shades-4 p-4 focus:border-shades-8 focus:outline-none"
            error={errors.password}
          />
          <Link href={"/forgot-password"} className="flex w-full justify-end">
            <p className="text-blue-600">Forgot Password ?</p>
          </Link>
          <Button
            onClick={handleSubmit}
            className="w-full"
            isFormSubmitting={isFormSubmitting}
          >
            Sign In
          </Button>
          <Link href={"/sign-up"}>
            <p className="body-2">
              {`Don't have Account ? `} &nbsp;
              <span className="text-blue-600">Register Now</span>{" "}
            </p>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default SignIn;
