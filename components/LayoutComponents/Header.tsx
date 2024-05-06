"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { navLinks } from "@/constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState("");
  const [active, setActive] = useState("");

  return (
    <div className="fixed left-0 top-0 z-50 mb-4 w-full border-b border-shades-4  lg:mb-6 lg:backdrop-blur-lg ">
      <nav className="flex-between px-5 py-4 lg:px-8 lg:py-5 xl:px-10">
        <Link
          href={"/"}
          className="flex-center gap-4"
          onClick={() => setActive("")}
        >
          <Image
            src={"/assets/icons/resumify-logo.svg"}
            alt="Resumify Logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <p className="logo_text">Resumify</p>
        </Link>
        <div className="flex-center z-20 gap-4 lg:gap-8">
          {navLinks?.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className="relative mt-2 h-8"
              onMouseEnter={() => setIsMenuOpen(link.id)}
              onClick={() => setActive(link.id)}
              onMouseLeave={() => setIsMenuOpen("")}
            >
              <p
                className={`text-lg font-medium ${active === link.id ? "text-primary-green" : "text-shades-12"} hover:text-primary-green`}
              >
                {link.title}
              </p>
              {link.subLinks &&
                link.subLinks.length > 0 &&
                isMenuOpen === link.id && (
                  <div
                    onMouseLeave={() => setIsMenuOpen("")}
                    className="flex-start absolute left-0 top-full z-10 w-60 flex-col gap-3 rounded-lg bg-white p-4 shadow-2xl shadow-shades-6"
                  >
                    {link.subLinks.map((subLink) => (
                      <Link
                        href={subLink.uri}
                        key={subLink.id}
                        onClick={() => {
                          setIsMenuOpen("");
                          // setActive(subLink.id);
                        }}
                      >
                        <p
                          className={`text-[1rem] text-shades-12 hover:text-primary-green`}
                        >
                          {subLink.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
            </Link>
          ))}
          {/* <Link href={"/sign-in"}>
              <button
                // key={provider?.name}
                type="button"
                // onClick={() => signIn(provider?.id)}
                className="black_btn"
              >
                Sign in
              </button>
            </Link> */}
          <Link href={"/sign-in"}>
            <button type="button" className="black_btn">
              Sign In
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
