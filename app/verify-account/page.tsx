"use client";
import { Button, Section } from "@/components/SubComponents";
import { useSearchParams } from "next/navigation";
import axios, { isAxiosError } from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const VerifyAccount = () => {
  const searchParams = useSearchParams();
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);

  const verifyEmail = async () => {
    setIsFormSubmitting(true);
    try {
      const { data, status } = await axios.post("/api/user/verify-account", {
        token: searchParams.get("resumify-token"),
      });
      if (status === 200) {
        toast.success(data.message);
        setIsVerified(true);
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
      className="w-full"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="flex-center mt-4 w-full flex-col lg:mt-8 xl:mt-16">
        <div className="flex-center h-auto w-72 flex-col gap-5 rounded-xl bg-white p-4 shadow-2xl shadow-shades-6 lg:w-96 lg:p-6 ">
          <h2 className="mb-2 text-2xl font-bold">Verify Your Email</h2>
          {isVerified ? (
            <div className="mb-6 text-green-500">
              Email Verified Successfully!
            </div>
          ) : (
            <>
              <p className="mb-6">
                Click the button below to verify your email address.
              </p>
              <Button
                onClick={verifyEmail}
                className="w-full"
                isFormSubmitting={isFormSubmitting}
              >
                Verify Email
              </Button>
            </>
          )}
        </div>
      </div>
    </Section>
  );
};

export default VerifyAccount;
