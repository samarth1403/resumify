"use client";
import { ReviewType } from "@/constants";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetAllReviews = ({ type }: { type: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [reviews, setReviews] = useState<Array<ReviewType>>([]);

  const getAllReviews = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data, status } = await axios.get(`/api/review/all-reviews`, {
        params: { type },
      });
      if (status === 200) {
        setReviews(data.data);
      }
    } catch (error: unknown) {
      toast.error("Failed to fetch reviews");
      setReviews([]);
    } finally {
      setIsLoading(false);
    }
  }, [type]);

  useEffect(() => {
    getAllReviews();
  }, [getAllReviews]);

  const refetch = () => getAllReviews();
  return { reviews, isLoading, refetch };
};

export default useGetAllReviews;
