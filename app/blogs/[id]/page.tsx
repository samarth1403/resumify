"use client";
import BlogDetailComponent from "@/components/SubComponents/BlogDetailComponent";
import { AllBlogs, BlogType } from "@/constants";
import { useParams } from "next/navigation";

const BlogPost = () => {
  const params = useParams();
  const blog =
    AllBlogs.find((blog) => blog.id === params.id) || ({} as BlogType);
  return <BlogDetailComponent blog={blog} />;
};

export default BlogPost;
