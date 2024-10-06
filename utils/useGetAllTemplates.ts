import { templateType } from "@/constants";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface propTypes {
  type: string;
  subtype?: string;
}

const useGetAllTemplates = ({ type, subtype }: propTypes) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [templates, setTemplates] = useState<templateType[]>([]);

  const getAllTemplates = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data, status } = await axios.get(`/api/template/all-templates`, {
        params: {
          type,
          subtype,
        },
      });
      if (status === 200) {
        setTemplates(data.data);
      }
    } catch (error: unknown) {
      toast.error("Failed to fetch templates");
      setTemplates([]);
    } finally {
      setIsLoading(false);
    }
  }, [type, subtype]);

  useEffect(() => {
    getAllTemplates();
  }, [getAllTemplates]);

  const refetch = () => getAllTemplates();
  return { templates, isLoading, refetch };
};

export default useGetAllTemplates;
