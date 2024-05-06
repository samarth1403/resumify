import BlogsComponent from "@/components/SubComponents/BlogsComponent";
import { cvBlogsData } from "@/constants/CV";
import { coverLetterBlogsData } from "@/constants/CoverLetter";
import { resumeBlogsData } from "@/constants/Resume";
import React from "react";

const Blogs = () => {
  return (
    <div className="mt-4 lg:mt-6">
      <BlogsComponent
        title="All Blogs"
        blogsData={[
          ...resumeBlogsData,
          ...cvBlogsData,
          ...coverLetterBlogsData,
        ]}
      />
    </div>
  );
};

export default Blogs;
