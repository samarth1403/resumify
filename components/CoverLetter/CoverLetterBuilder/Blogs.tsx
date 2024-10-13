import BlogsComponent from "@/components/SubComponents/BlogsComponent";
import { AllBlogs } from "@/constants";
import React from "react";

const Blogs = () => {
  return (
    <BlogsComponent
      title="Looking for Guidance to Make Cover Letter"
      blogsData={AllBlogs.filter((blog) => blog.type === "cover-letter")}
    />
  );
};

export default Blogs;
