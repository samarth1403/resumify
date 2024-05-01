import FaqComponent from "@/components/SubComponents/FaqComponent";
import { resumeFaqData } from "@/constants/Resume";

const Faq = () => {
  return (
    // <Section
    //   className="w-full"
    //   crosses
    //   crossesOffset="lg:translate-y-[5.25rem]"
    //   customPaddings
    //   id="steps"
    // >
    //   <div className="flex-center mt-4 w-full flex-col lg:mt-8 xl:mt-12">
    //     <Heading title="Resume Builder FAQ" />
    //     <div className=" flex w-72 flex-col gap-4 md:w-96 lg:w-[50rem]">
    //       {resumeFaqData?.map((data, index) => (
    //         <Collapsible
    //           key={data.id}
    //           title={data.title}
    //           questionStyle="h8 w-full bg-white p-4 px-8 flex-between gap-4 rounded-t-xl shadow-xl shadow-shades-3 "
    //           answerStyle="body-2 bg-shades-2 flex-start w-full rounded-b-xl px-8 py-6"
    //         >
    //           <p>{data.text}</p>
    //         </Collapsible>
    //       ))}
    //     </div>
    //   </div>
    // </Section>
    <FaqComponent title="Resume Builder FAQ" faqData={resumeFaqData} />
  );
};

export default Faq;
