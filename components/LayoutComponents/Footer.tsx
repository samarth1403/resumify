import React from "react";
import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex-center mt-8 w-full flex-col py-4 lg:mt-16">
      <div className="hidden flex-row flex-wrap items-start justify-center gap-16 lg:flex ">
        {footerLinks?.map((link, index) => (
          <div className="flex-start flex-col gap-6" key={link.id}>
            <p className="h6">{link.title}</p>
            <div className="flex-start flex-col gap-3">
              {link.subLinks.map((subLink) => (
                <Link href={subLink.uri} key={subLink.id}>
                  <p className="text-[1rem]">{subLink.title}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
