import Heading from "@/components/SubComponents/Heading";
import Section from "@/components/SubComponents/Section";
import Image from "next/image";

interface propTypes {
  title: string;
  blogsData: {
    id: string;
    image: string;
    title: string;
    text: string;
    creator: string;
    createdAt: string;
  }[];
}

const BlogsComponent = ({ title, blogsData }: propTypes) => {
  return (
    <Section
      className="w-full "
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="steps"
    >
      <div className="mt-4 flex w-full flex-col items-center justify-center lg:mt-8 lg:w-full xl:mt-12">
        <Heading title={title} />
        <div className="flex w-full flex-wrap items-center justify-center gap-6 lg:gap-8">
          {blogsData?.map((blog, index) => (
            <div
              key={blog.id}
              className="flex-start flex w-60 flex-col gap-4 rounded-xl bg-white p-4 shadow-2xl shadow-shades-2 sm:w-72 lg:w-[21rem] lg:gap-6   "
            >
              <Image
                src={blog.image}
                alt=""
                height={100}
                width={100}
                className="size-full rounded-xl object-contain"
                loading="lazy"
              />
              <div className="flex-start flex-col gap-4">
                <p className="body-1">{blog.title}</p>
                <p className="text-[0.8rem] lg:text-[0.95rem]">{blog.text}</p>
              </div>
              <p className="text-[0.8rem] lg:text-[0.95rem]">
                <i>by</i> &nbsp; {blog.creator} &nbsp; - &nbsp; {"  "}
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
