"use client";
import { Section } from "@/components/SubComponents";
import { useGlobalContext } from "@/context/GlobalProvider";
import useGetUserDocuments from "@/utils/useGetUserDocuments";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserDocuments = () => {
  const { user } = useGlobalContext();
  const router = useRouter();
  const { documentsData, isLoading } = useGetUserDocuments();

  return (
    <Section
      className="mt-[4.25rem] w-full"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="flex-center mt-2 w-full flex-col">
        <div className="flex w-full flex-col items-start justify-start gap-4">
          <div className="h2 w-full text-center font-bold">
            {`Hello, ${user?.username}`}
          </div>
          <div className="flex w-full flex-col flex-wrap items-center  justify-center gap-2 ">
            <Image
              src={"/assets/images/personal-documents.svg"}
              alt={""}
              width={50}
              height={50}
              className="aspect-square w-48 object-contain lg:w-64 "
              loading="lazy"
            />
            <div className="flex-start w-72 flex-col gap-[0.6rem] lg:w-96">
              <div className="flex-between w-72 lg:w-96">
                <p className="h6">Your Documents</p>
                <Link
                  href={"/documents"}
                  className="body-3 font-bold text-blue-500"
                >
                  View All
                </Link>
              </div>
              {!isLoading ? (
                <div className="flex-start flex-col gap-1">
                  <div
                    className="flex-between w-72 cursor-pointer lg:w-96"
                    onClick={() => router.push("/documents")}
                  >
                    <p className="body-3 text-blue-500">Your Resumes</p>
                    <p className="body-3 font-bold text-blue-500">
                      {documentsData?.resumes?.length}
                    </p>
                  </div>
                  {/* <div className="flex-between w-96">
                  <p className="body-3 text-blue-500">Your CVs</p>
                  <p className="body-3 font-bold text-blue-500">
                    {documentsData?.cvs?.length}
                  </p>
                </div> */}
                  <div
                    className="flex-between w-72 cursor-pointer lg:w-96"
                    onClick={() => router.push("/documents")}
                  >
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
      </div>
    </Section>
  );
};

export default UserDocuments;
