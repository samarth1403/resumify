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
      <div className="flex-center mt-4 w-full flex-col lg:mt-8 xl:mt-12">
        <Heading title="Latest advice from our job search experts" />
        <div className="flex w-full flex-wrap items-start justify-around gap-6">
          {blogsData?.map((blog, index) => (
            <div
              key={blog.id}
              className="flex-start flex w-72 flex-col gap-4 rounded-xl bg-white p-4 shadow-2xl shadow-shades-2 lg:w-[21rem] lg:gap-8   "
            >
              <Image
                src={blog.image}
                alt=""
                height={100}
                width={100}
                className="size-full rounded-xl object-contain"
              />
              <div className="flex-start flex-col gap-4">
                <p className="body-1">{blog.title}</p>
                <p className="text-[0.95rem]">{blog.text}</p>
                <p className="text-[0.95rem]">{blog.creator}</p>
                <p className="text-[0.95rem]">
                  {new Date(blog.createdAt).getUTCDate()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default BlogsComponent;
