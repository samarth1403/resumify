"use client";
import { Section } from "@/components/SubComponents";
import { useGlobalContext } from "@/context/GlobalProvider";
import useGetUserDocuments from "@/utils/useGetUserDocuments";
import Link from "next/link";

const UserDocuments = () => {
  const { user } = useGlobalContext();
  const { documentsData, isLoading } = useGetUserDocuments();

  return (
    <Section
      className="mt-[5.25rem] w-full"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="flex-center mt-2 w-full flex-col">
        <div className="flex-between w-full">
          <div className="h2 w-full text-start font-bold">
            {`Hello, ${user?.username}`}
          </div>
          <div className="flex-start flex-col gap-[0.6rem]">
            <div className="flex-between w-96">
              <p className="h6">Your Documents</p>
              <Link
                href={"/documents"}
                className="body-3 font-bold text-blue-500"
              >
                View All
              </Link>
            </div>
            {!isLoading ? (
              <div className="flex-start flex-col">
                <div className="flex-between w-96">
                  <p className="body-3 text-blue-500">Your Resumes</p>
                  <p className="body-3 font-bold text-blue-500">
                    {documentsData?.resumes?.length}
                  </p>
                </div>
                <div className="flex-between w-96">
                  <p className="body-3 text-blue-500">Your CVs</p>
                  <p className="body-3 font-bold text-blue-500">
                    {documentsData?.cvs?.length}
                  </p>
                </div>
                <div className="flex-between w-96">
                  <p className="body-3 text-blue-500">Your Cover Letters</p>
                  <p className="body-3 font-bold text-blue-500">
                    {documentsData?.coverLetters?.length}
                  </p>
                </div>
              </div>
            ) : (
              <div className="medium-loader" />
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default UserDocuments;
