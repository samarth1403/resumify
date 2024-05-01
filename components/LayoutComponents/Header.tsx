import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navLinks } from "@/constants";

const Header = () => {
  return (
    <div className="fixed left-0 top-0 z-50 mb-4 w-full border-b border-shades-4  lg:mb-6 lg:backdrop-blur-lg ">
      <nav className="flex-between px-5 py-4 lg:px-8 lg:py-5 xl:px-10">
        <Link href={"/"} className="flex-center gap-4">
          <Image
            src={"/assets/icons/resumify-logo.svg"}
            alt="Resumify Logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <p className="logo_text">Resumify</p>
        </Link>
        <div className="flex-center gap-4 lg:gap-8">
          {navLinks?.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className=" text-lg font-medium text-shades-12 hover:text-primary-green">
                {link.title}
              </p>
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
            <button
              // key={provider?.name}
              type="button"
              // onClick={() => signIn(provider?.id)}
              className="black_btn"
            >
              Sign Out
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
