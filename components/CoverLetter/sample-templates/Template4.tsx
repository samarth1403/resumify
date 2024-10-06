import { Section } from "@/components/SubComponents";
import React from "react";

const Template4 = () => {
  const html = `
    <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Payment Receipt</title>
    <style>
        body {
          margin: 0;
          padding: 0;
        }

       .container {
         min-height: 1000px;
         height: 100%;
         width: 800px;
         display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: start;
          background-color: white;
       }
       .header {
          height: 160px;
          border-radius: 20px 20px 0 0;
          width: 100%;
          padding: 0 20px;  
       }
       .name-details-div {
        display:flex; width:100%; height: 100%; align-items: center;justify-content: center;
       }
       .self-details-div{
          display: flex;
            width: 100%;
            height: auto;
            flex-direction: column;
            gap: 16px;
            color: white;
            align-items: center;
            justify-content: center;
       }
       .flex-col-start{
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: start;
          gap: 4px;
       }
       .outer-body-div {
          width: 100%;
          height: 100%;
          background-color: white;
          border-radius: 0 0 20px 20px;
       }
       .self-details {
        display:flex;
        flex-direction:row;
        justify-content:start;
        align-items:start;
        gap:4px;
        font-size:0.9rem;
       }
       .name-div {
         font-size: 2.5rem;
       }
       .body-div {
          font-size: 0.8rem;
          padding: 32px;
          gap: 36px;
          width: 100%;
          height: 100%;
          text-align: justify;
       }
    </style>
  </head>
  <body>
     <div class="container">
        <div class="header">
          <div class="name-details-div" >
            <div class="self-details-div">
              <p class="name-div" >{name}</p>
              <div class="self-details" >
                   <p>{email} &nbsp; | &nbsp;</p>
                <p>{phone} &nbsp; | &nbsp;</p>
                <p>{address}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="outer-body-div">
          <div class="flex-col-start body-div">
            <p>{date}</p>
            <div class=" flex-col-start">
            <p>{recruiterName} , {recruiterPosition}</p>
              <p>{hiringCompanyName}</p>
              <p>{hiringCompanyAddress}</p>
            </div>
             <p>Dear Mr. {recruiterName} ,</p>
            <p>
               {coverLetterOpener}
              </p>
              <p>
                {coverLetterBody1}
              </p>
              <p>
                {coverLetterBody2}
              </p>
              <p>
                {coverLetterCloser}
              </p>
            <div class="flex-col-start">
              <p>Sincerely,</p>
              <p>{name}</p>
            </div>
          </div>
      </div>
  </body>
</html>
    `;
  const htmlOption = `
    <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Payment Receipt</title>
    <style>
        body {
          margin: 0;
          padding: 0;
        }
       .container {
         min-height: 410px;
         height: 100%;
         width: 320px;
         display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: start;
          background-color: white;
          border-radius: 20px;
       }
       .header {
          height: 80px;
          background-color: rgb(30 58 138);
          border-radius: 20px 20px 0 0;
          width: 100%;
          padding: 0 20px;  
       }
       .name-details-div {
        display:flex; width:100%; height: 100%; align-items: center;justify-content: center;
       }
       .self-details-div{
          display: flex;
            width: 100%;
            height: auto;
            flex-direction: column;
            gap: 8px;
            color: white;
            align-items: center;
            justify-content: center;
       }
       .flex-col-start{
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: start;
          gap: 2px;
       }
       .flex-row-center {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 8  px;
          width: 100%;
          height: 100%;
       }
       .outer-body-div {
          width: 100%;
          height: 100%;
          background-color: white;
          border-radius: 0 0 20px 20px;
       }
       .self-details {
        display:flex;
        flex-direction:row;
        justify-content:start;
        align-items:start;
        gap:4px;
        font-size:0.38rem;
       }
       .name-div {
         font-size: 1.5rem;
       }
       .body-div {
          font-size: 0.35rem;
          padding: 20px;
          gap: 14px;
          width: 100%;
          height: 100%;
          text-align: justify;
       }
    </style>
  </head>
  <body>
     <div class="container">
        <div class="header">
          <div class="name-details-div" >
            <div class="self-details-div">
              <p class="name-div" >{name}</p>
              <div class="self-details" >
                   <p>{email} &nbsp; | &nbsp;</p>
                <p>{phone} &nbsp; | &nbsp;</p>
                <p>{address}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="outer-body-div">
          <div class="flex-col-start body-div">
            <p>{date}</p>
            <div class=" flex-col-start">
            <p>{recruiterName} , {recruiterPosition}</p>
              <p>{hiringCompanyName}</p>
              <p>{hiringCompanyAddress}</p>
            </div>
             <p>Dear Mr. {recruiterName} ,</p>
            <p>
               {coverLetterOpener}
              </p>
              <p>
                {coverLetterBody1}
              </p>
              <p>
                {coverLetterBody2}
              </p>
              <p>
                {coverLetterCloser}
              </p>
            <div class="flex-col-start">
              <p>Sincerely,</p>
              <p>{name}</p>
            </div>
          </div>
      </div>
  </body>
</html>
      `;
  return (
    <Section
      className="mt-[5.25rem] size-full "
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="steps"
    >
      <div className="flex h-full min-h-[1000px] w-[800px] flex-col items-start justify-start rounded-xl shadow-xl shadow-gray-400 ">
        <div className="h-40 w-full rounded-t-xl   bg-blue-900 px-10 ">
          <div className="flex  size-full items-center justify-center ">
            <div className="flex h-auto w-full  flex-col items-center justify-center gap-2 text-white ">
              <p className="h3">John Doe</p>
              {/* <hr className="mt-2 h-1 w-full border-gray-400" /> */}
              <div className="flex-start body-3 gap-1 font-bold">
                <p>samarth@gmail.com &nbsp; | &nbsp;</p>
                <p>7499355194 &nbsp; | &nbsp;</p>
                <p>Pune , Maharashtra - 413006</p>
              </div>
            </div>
          </div>
        </div>
        <div className="size-full rounded-b-xl bg-white ">
          <div className="body-4 flex size-full flex-col items-start justify-start gap-6 p-8 text-justify ">
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

export default Template4;
