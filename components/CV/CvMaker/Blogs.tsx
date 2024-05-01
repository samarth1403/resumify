import BlogsComponent from "@/components/SubComponents/BlogsComponent";
import { cvBlogsData } from "@/constants/CV";
import React from "react";

const Blogs = () => {
  return (
    <BlogsComponent
      title="Looking for Guidance to Make CV"
      blogsData={cvBlogsData}
    />
  );
};

export default Blogs;
