"use client";
import { Button, Loader, TemplateShowCard } from "@/components/SubComponents";
import { documentType } from "@/constants";
import { useState } from "react";

const DocumentCard = ({
  type,
  documents,
  isLoading = true,
  documentType,
}: {
  type: string;
  documents: documentType[];
  isLoading: boolean;
  documentType: string;
}) => {
  const [userDocuments, setUserDocuments] = useState<documentType[]>(documents);
  if (documents.length === 0) return;
  <div>
    <p className="h4">You have no {type}</p>
    <Button
      href={`${type === "resume" ? "/resume/build-resume" : "/resume/build-letter"}`}
    >{`Create Your ${type === "resume" ? "Resume" : "Cover Letter"}`}</Button>
    <hr className="my-4 h-[2px] w-full bg-gray-500" />
  </div>;

  return (
    <div className="flex-center w-full flex-col">
      <p className="h4">Your {type}</p>

      {!isLoading ? (
        <div className="mt-8 flex w-full flex-row flex-wrap items-start justify-center gap-10">
          {userDocuments?.length > 0 &&
            userDocuments?.map((document) => (
              <div key={document?._id}>
                {document?.template && (
                  <TemplateShowCard
                    key={document?._id}
                    templateContentData={document?.userData}
                    isLoading={isLoading}
                    template={document?.template}
                    cardTitle={document?.template?.name}
                    selfDocument
                    type={documentType}
                    documentId={document?._id}
                    setUserDocuments={setUserDocuments}
                  />
                )}
              </div>
            ))}
        </div>
      ) : (
        <Loader />
      )}
      <hr className="my-4 h-[2px] w-full bg-gray-500" />
    </div>
  );
};

export default DocumentCard;
