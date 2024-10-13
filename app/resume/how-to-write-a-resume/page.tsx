"use client";
import BlogDetailComponent from "@/components/SubComponents/BlogDetailComponent";
import { AllBlogs, BlogType } from "@/constants";

const BlogPost = () => {
  const blog = AllBlogs.find((blog) => blog.id === "1") || ({} as BlogType);
  return <BlogDetailComponent blog={blog} />;
};

export default BlogPost;
