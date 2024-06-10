"use client";
import { DocumentCard, Section } from "@/components/SubComponents";
import useGetUserDocuments from "@/utils/useGetUserDocuments";
import React from "react";

const DocumentsPage = () => {
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
        <DocumentCard
          type="Resumes"
          documents={documentsData?.resumes}
          isLoading={isLoading}
        />
        <DocumentCard
          type="CVs"
          documents={documentsData?.cvs}
          isLoading={isLoading}
        />
        <DocumentCard
          type="Cover Letters"
          documents={documentsData?.coverLetters}
          isLoading={isLoading}
        />
      </div>
    </Section>
  );
};

export default DocumentsPage;
