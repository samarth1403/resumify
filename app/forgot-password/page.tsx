"use client";
import Button from "@/components/SubComponents/Button";
import FormField from "@/components/SubComponents/FormField";
import Section from "@/components/SubComponents/Section";
import { validateForgotPassword } from "@/components/Validation/Validation";
import axios, { isAxiosError } from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface formDataTypes {
  email: string;
}

const ForgotPassword = () => {
  const [isFormSubmitting, setFormIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState<formDataTypes>({
    email: "",
  });
  const [errors, setErrors] = useState<Record<string, { message: string }>>({});

  const setFormDataKey = (
    key: string,
    value: string | number | boolean | readonly string[]
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    const errors = validateForgotPassword(formData);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    setFormIsSubmitting(true);
    try {
      const { data, status } = await axios.post(
        "/api/user/forgot-password",
        formData
      );
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
      <div className="flex-center mt-4 w-full flex-col lg:mt-4 xl:mt-6">
        <p className="body-1 mb-8">
          We Will Send You An Email To Reset Your Password .
        </p>
        <div className="flex-center h-auto w-72 flex-col gap-4 rounded-xl bg-white p-4 shadow-2xl shadow-shades-6 lg:w-96 lg:gap-8 lg:p-6 ">
          <FormField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            setValue={setFormDataKey}
            placeholder="Drop Your Email Here"
            className="w-full rounded-lg border-2 border-shades-4 p-4 focus:border-shades-8 focus:outline-none"
            error={errors.email}
            isRequired
          />
          <Button
            onClick={handleSubmit}
            className="w-full"
            isFormSubmitting={isFormSubmitting}
          >
            Send Email
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default ForgotPassword;
