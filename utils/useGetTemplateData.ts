"use client";
import { initialTemplateData, templateType } from "@/constants";
import { useGlobalContext } from "@/context/GlobalProvider";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetTemplateData = () => {
  const { selectedTemplateId } = useGlobalContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [templateData, setTemplateData] =
    useState<templateType>(initialTemplateData);

  const getAllTemplates = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data, status } = await axios.get(`/api/template/get-template`, {
        params: {
          templateId: selectedTemplateId,
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
  }, [selectedTemplateId]);

  useEffect(() => {
    if (selectedTemplateId) {
      getAllTemplates();
    }
  }, [getAllTemplates, selectedTemplateId]);

  const refetch = () => getAllTemplates();
  return { templateData, isLoading, refetch };
};

export default useGetTemplateData;
