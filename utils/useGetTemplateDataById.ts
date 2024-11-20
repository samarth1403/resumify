"use client";
import { initialTemplateData, templateType } from "@/constants";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetTemplateDataById = ({ templateId }: { templateId: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [templateData, setTemplateData] =
    useState<templateType>(initialTemplateData);

  const getTemplateDataById = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data, status } = await axios.get(`/api/template/get-template`, {
        params: {
          templateId,
        },
      });
      if (status === 200) {
        setTemplateData(data.data);
      }
    } catch (error: unknown) {
      toast.error("Failed to fetch template data");
      setTemplateData(initialTemplateData);
    } finally {
      setIsLoading(false);
    }
  }, [templateId]);

  useEffect(() => {
    if (templateId) {
      getTemplateDataById();
    }
  }, [getTemplateDataById, templateId]);

  const refetch = () => getTemplateDataById();
  return { templateData, isLoading, refetch };
};

export default useGetTemplateDataById;
