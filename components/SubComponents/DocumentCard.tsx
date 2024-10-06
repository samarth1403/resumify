"use client";
import { Loader, TemplateShowCard } from "@/components/SubComponents";
import { documentType } from "@/constants";

const DocumentCard = ({
  type,
  documents,
  isLoading = true,
}: {
  type: string;
  documents: documentType[];
  isLoading: boolean;
}) => {
  if (documents.length === 0) return null;

  return (
    <div className="flex-start w-full flex-col">
      <p className="h4">Your {type}</p>
      <hr className="my-4 h-[2px] w-full bg-gray-500" />
      {!isLoading ? (
        <div className="mt-8 flex w-full flex-row flex-wrap items-start justify-start gap-10">
          {documents?.length > 0 &&
            documents?.map((document) => (
              <div key={document._id}>
                {document.templateId && (
                  <TemplateShowCard
                    key={document._id}
                    templateContentData={document.userData}
                    isLoading={isLoading}
                    template={document.templateId}
                    cardTitle={document.templateId.name}
                    selfDocument
                  />
                )}
              </div>
            ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default DocumentCard;
