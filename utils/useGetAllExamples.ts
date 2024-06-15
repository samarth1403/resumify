import { exampleType } from "@/constants";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface propTypes {
  type: string;
}

const useGetAllExamples = ({ type }: propTypes) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [examples, setExamples] = useState<exampleType[]>([]);

  const getAllExamples = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data, status } = await axios.get(`/api/example/all-examples`, {
        params: {
          type,
        },
      });
      if (status === 200) {
        setExamples(data.data);
      }
    } catch (error: unknown) {
      toast.error(`Failed to fetch ${type} examples`);
      setExamples([]);
    } finally {
      setIsLoading(false);
    }
  }, [type]);

  useEffect(() => {
    getAllExamples();
  }, [getAllExamples]);

  const refetch = () => getAllExamples();
  return { examples, isLoading, refetch };
};

export default useGetAllExamples;
