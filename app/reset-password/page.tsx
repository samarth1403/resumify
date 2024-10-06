"use client";
import Button from "@/components/SubComponents/Button";
import FormField from "@/components/SubComponents/FormField";
import Section from "@/components/SubComponents/Section";
import { validateResetPassword } from "@/components/Validation/Validation";
import axios, { isAxiosError } from "axios";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface formDataTypes {
  newPassword: string;
}

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState<formDataTypes>({
    newPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, { message: string }>>({});

  const setFormDataKey = (
    key: string,
    value: string | number | boolean | readonly string[]
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const ResetPassword = async () => {
    const errors = validateResetPassword(formData);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    setIsFormSubmitting(true);
    try {
      const { data, status } = await axios.post("/api/user/reset-password", {
        token: searchParams.get("resumify-token"),
        newPassword: formData.newPassword,
      });
      if (status === 200) {
        toast.success(data.message);
      }
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data?.error || "An error occurred");
      } else {
        toast.error("An error occurred");
      }
    } finally {
      setIsFormSubmitting(false);
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
        <p className="body-1 mb-8">Reset Your Password.</p>
        <div className="flex-center h-auto w-72 flex-col gap-4 rounded-xl bg-white p-4 shadow-2xl shadow-shades-6 lg:w-96 lg:gap-8 lg:p-6 ">
          <FormField
            label="New Password"
            type="password"
            name="newPassword"
            value={formData.newPassword}
            setValue={setFormDataKey}
            placeholder="Enter New Password"
            className="w-full rounded-lg border-2 border-shades-4 p-4 focus:border-shades-8 focus:outline-none"
            error={errors.newPassword}
            isRequired
          />
          <Button
            onClick={ResetPassword}
            className="w-full"
            isFormSubmitting={isFormSubmitting}
          >
            Submit
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default ResetPassword;
