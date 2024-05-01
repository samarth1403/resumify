import BlogsComponent from "@/components/SubComponents/BlogsComponent";
import { coverLetterBlogsData } from "@/constants/CoverLetter";
import React from "react";

const Blogs = () => {
  return (
    <BlogsComponent
      title="Looking for Guidance to Make Cover Letter"
      blogsData={coverLetterBlogsData}
    />
  );
};

export default Blogs;
