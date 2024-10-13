import { BlogType } from "@/constants";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetAllBlogs = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [blogs, setBlogs] = useState<BlogType[]>([]);

  const getAllBlogs = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data, status } = await axios.get(`/api/blog/all-blogs`);
      if (status === 200) {
        setBlogs(data.data);
      }
    } catch (error: unknown) {
      toast.error("Failed to fetch Blogs");
      setBlogs([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getAllBlogs();
  }, [getAllBlogs]);

  const refetch = () => getAllBlogs();
  return { blogs, isLoading, refetch };
};

export default useGetAllBlogs;
