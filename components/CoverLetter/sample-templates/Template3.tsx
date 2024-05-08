import { Section } from "@/components/SubComponents";
import React from "react";

const Template3 = () => {
  return (
    <Section
      className="mt-[5.25rem] size-full bg-red-300"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="steps"
    >
      <div className="flex h-full min-h-[1000px]  w-[800px] flex-col items-start justify-start rounded-xl">
        {/* <div className="h-40 w-full rounded-t-xl   bg-gray-200 px-10 pt-10 ">
          <div className="flex  size-full items-center justify-center border-x-2 border-t-2 border-gray-400 ">
            <p className="h4">John Doe</p>
          </div>
        </div> */}
        <div className="size-full rounded-xl bg-white p-10 ">
          <div className="body-4 flex size-full flex-col items-start justify-start gap-6 rounded-xl border-2 border-gray-400 p-6 ">
            <div className="flex h-auto w-full  flex-col items-start justify-center gap-2 ">
              <p className="h4 text-blue-700">John Doe</p>
              <div className="flex-start body-3 gap-1 font-bold">
                <p>samarth@gmail.com &nbsp; | &nbsp;</p>
                <p>7499355194 &nbsp; | &nbsp;</p>
                <p>Pune , Maharashtra - 413006</p>
              </div>
              <hr className="mt-2 h-1 w-full border-gray-400" />
            </div>

            <p>February 2024</p>
            <div className="flex-start flex-col gap-1">
              <p>John Doe, Hiring Manager</p>
              <p>Company Name</p>
              <p>Pune , Maharashtra - 413006</p>
            </div>
            <p>Dear Sir,</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              debitis provident ratione! Totam molestiae amet vel aliquam atque
              non nesciunt, omnis at suscipit quaerat facilis quis esse fugiat
              consequuntur rem beatae recusandae aut porro culpa veritatis. Ex
              sit aliquam impedit debitis necessitatibus consequuntur, iusto
              aspernatur quod at quaerat placeat deserunt incidunt ad? Animi vel
              et quos alias cupiditate quas
            </p>
            <p className="whitespace-pre-line">
              {`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti error hic, eveniet fugiat, explicabo exercitationem soluta optio perspiciatis ipsum nobis fuga tenetur! Optio natus debitis aspernatur commodi error repellendus cum? Fugit doloremque placeat quam veniam minus aut non voluptate explicabo?
              
              Cupiditate, aut ab, culpa nisi repellat rem quae expedita voluptates id corporis sint possimus laboriosam voluptate provident qui explicabo similique facilis? 
              `}
            </p>
            <p>
              Libero rem blanditiis sed impedit, pariatur alias facilis? Tenetur
              maxime dolor sed at commodi officiis accusamus, nobis possimus
              cupiditate quasi voluptatem sint, consectetur ad voluptates odio?
              Obcaecati consectetur error, sunt rem nobis perferendis
              voluptatibus minus illo. Officia, blanditiis earum.
            </p>
            <div className="flex-start flex-col">
              <p>Sincerely,</p>
              <p>Samarth Ikkalaki</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Template3;
