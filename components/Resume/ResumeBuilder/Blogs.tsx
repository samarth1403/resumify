import BlogsComponent from "@/components/SubComponents/BlogsComponent";
import { AllBlogs } from "@/constants";

const Blogs = () => {
  return (
    <BlogsComponent
      title="Latest advice from our job search experts"
      blogsData={AllBlogs?.filter((blog) => blog.type === "resume")}
    />
  );
};

export default Blogs;
