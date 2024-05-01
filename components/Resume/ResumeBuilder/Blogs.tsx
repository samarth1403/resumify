import BlogsComponent from "@/components/SubComponents/BlogsComponent";
import { resumeBlogsData } from "@/constants/Resume";

const Blogs = () => {
  return (
    <BlogsComponent
      title="Latest advice from our job search experts"
      blogsData={resumeBlogsData}
    />
  );
};

export default Blogs;
