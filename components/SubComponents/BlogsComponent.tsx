"use client";
import Heading from "@/components/SubComponents/Heading";
import Section from "@/components/SubComponents/Section";
import { BlogType } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface propTypes {
  title: string;
  blogsData: BlogType[];
}

const BlogsComponent = ({ title, blogsData }: propTypes) => {
  const router = useRouter();
  return (
    <Section
      className="w-full "
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="steps"
    >
      <div className="mt-4 flex w-full  flex-col items-center justify-center lg:mt-8 lg:w-full xl:mt-12">
        <Heading title={title} />
        <div className="flex w-full flex-wrap items-center justify-center gap-6 lg:gap-8">
          {blogsData?.map((blog, index) => (
            <div
              onClick={() => router.push(`/blogs/${blog.id}`)}
              key={blog.id}
              className="flex-start flex w-60 cursor-pointer flex-col gap-4 rounded-xl bg-white p-4 shadow-2xl shadow-shades-3 sm:w-72 lg:w-[21rem] lg:gap-6   "
            >
              <Image
                src={blog.image || ""}
                alt=""
                height={100}
                width={100}
                className="aspect-video size-full rounded-xl object-contain"
                loading="lazy"
              />
              <div className="flex-start flex-col gap-4">
                <p className="h6">{blog.title}</p>
                {/* <p className="text-[0.8rem] lg:text-[0.95rem]">{blog.text}</p> */}
              </div>
              <p className="text-[0.8rem] lg:text-[0.95rem]">
                <i>by</i> &nbsp; {blog.author} &nbsp; - &nbsp; {"  "}
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default BlogsComponent;
