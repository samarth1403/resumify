import React, { ReactNode } from "react";
import Section from "@/components/SubComponents/Section";
import Image from "next/image";

interface propTypes {
  preTitle?: string;
  postTitle?: string;
  heroWord?: string;
  heroWordUnderlineImg?: string;
  text: string;
  heroImage: string;
  importBtn?: ReactNode;
  createBtn: ReactNode;
  orderReverse?: boolean;
  showUnderLineImage?: boolean;
}

const HeroComponent = ({
  preTitle,
  postTitle,
  heroWord,
  heroWordUnderlineImg,
  text,
  heroImage,
  importBtn,
  createBtn,
  orderReverse,
  showUnderLineImage = true,
}: propTypes) => {
  return (
    <Section
      className="mt-[5.25rem] w-full"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="grid grid-cols-12 gap-4 lg:gap-8 xl:gap-16">
        <div
          className={`col-span-12 md:col-span-8 ${orderReverse ? "order-2" : "order-1"} `}
        >
          <div className="flex-start flex-col gap-6 md:gap-6 lg:gap-8 xl:gap-10">
            <h1 className="h1">
              {preTitle}
              {heroWord && heroWordUnderlineImg && (
                <span className={`relative  inline-block `}>
                  {heroWord}
                  {showUnderLineImage && (
                    <Image
                      src={heroWordUnderlineImg}
                      alt=""
                      className="pointer-events-none absolute left-0  w-full "
                      width={100}
                      height={100}
                      style={{ objectFit: "contain" }}
                    />
                  )}
                </span>
              )}
              {postTitle}
            </h1>
            <p className="body-1">{text}</p>
            <div className="flex-center gap-4 lg:gap-8">
              {/* {importBtn && importBtn} */}
              {createBtn && createBtn}
            </div>
          </div>
        </div>
        <div
          className={`col-span-12 sm:col-span-6  md:col-span-4 ${orderReverse ? "order-1" : "order-2"} my-6 sm:my-8 lg:my-0 `}
        >
          <Image
            src={heroImage}
            alt="Resume"
            width={100}
            height={100}
            className="size-full rounded-lg object-contain shadow-2xl shadow-shades-6"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  );
};

export default HeroComponent;
