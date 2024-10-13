import BlogsComponent from "@/components/SubComponents/BlogsComponent";
import { AllBlogs } from "@/constants";

const Blogs = () => {
  return (
    <div className="mt-4 lg:mt-6">
      <BlogsComponent title="All Blogs" blogsData={AllBlogs} />
    </div>
  );
};

export default Blogs;
