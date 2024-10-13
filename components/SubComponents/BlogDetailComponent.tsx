"use client";
import { Section } from "@/components/SubComponents";
import { BlogType } from "@/constants";
import Image from "next/image";

const BlogDetailComponent = ({ blog }: { blog: BlogType }) => {
  return (
    <Section
      className="mt-[5.25rem] w-full"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="w-full">
        <p className="h5 lg:h2 text-center font-bold ">{blog.title}</p>
        <div className="flex-center w-full">
          <Image
            src={blog.image || ""}
            alt=""
            height={250}
            width={250}
            className="my-6 lg:my-8 rounded-xl object-contain"
            loading="lazy"
          />
        </div>

        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </Section>
  );
};

export default BlogDetailComponent;
