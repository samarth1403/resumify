"use client";
import { Button, DocumentCard, Section } from "@/components/SubComponents";
import useGetUserDocuments from "@/utils/useGetUserDocuments";
import React from "react";

const DocumentsPage = () => {
  const { documentsData, isLoading } = useGetUserDocuments();

  return (
    <Section
      className="mt-[4.25rem] w-full"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="flex-center  mt-2 w-full flex-col gap-8">
        {documentsData?.resumes.length === 0 && !isLoading ? (
          <div className="flex flex-col items-center justify-center gap-6">
            <p className="h4">You have no Resumes</p>
            <Button href="/resume/build-resume">Create Your Resume</Button>
            <hr className="my-4 h-[2px] w-full bg-gray-500" />
          </div>
        ) : documentsData?.resumes.length > 0 && !isLoading ? (
          <DocumentCard
            type="Resumes"
            documentType="resume"
            documents={documentsData?.resumes}
            isLoading={isLoading}
          />
        ) : isLoading ? (
          <div className="medium-loader" />
        ) : null}
        {documentsData?.coverLetters.length === 0 && !isLoading ? (
          <div className="flex flex-col items-center justify-center gap-6">
            <p className="h4">You have no Cover Letters</p>
            <Button href="/cover-letter/build-letter">
              Create Your Cover Letter
            </Button>
            <hr className="my-4 h-[2px] w-full bg-gray-500" />
          </div>
        ) : documentsData?.coverLetters.length > 0 && !isLoading ? (
          <DocumentCard
            type="Cover Letters"
            documents={documentsData?.coverLetters}
            isLoading={isLoading}
            documentType="cover-letter"
          />
        ) : isLoading ? (
          <div className="medium-loader" />
        ) : null}
      </div>
    </Section>
  );
};

export default DocumentsPage;
