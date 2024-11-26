"use client";
import { documentsDataType, initialDocumentsData } from "@/constants";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetUserDocuments = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [documentsData, setDocumentsData] =
    useState<documentsDataType>(initialDocumentsData);
  let token = null;

  if (typeof window !== "undefined") {
    token = localStorage.getItem("resumify-token");
  }

  const getAllDocuments = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data, status } = await axios.get(`/api/document/get`, {
        params: {
          token,
        },
      });
      if (status === 200) {
        setDocumentsData(data.documents);
      }
    } catch (error: unknown) {
      toast.error("Failed to fetch template data");
      setDocumentsData(initialDocumentsData);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getAllDocuments();
  }, [getAllDocuments]);

  const refetch = () => getAllDocuments();
  return { documentsData, isLoading, refetch };
};

export default useGetUserDocuments;
