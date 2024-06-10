"use client";
import { GlobalContextType, navLinks, userInfoType } from "@/constants";
import { useGlobalContext } from "@/context/GlobalProvider";
import axios, { isAxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../SubComponents";

const Header = () => {
  const {
    isUserLoggedIn,
    user,
    setIsUserLoggedIn,
    setUser,
  }: GlobalContextType = useGlobalContext();
  const router = useRouter();
  const [isFormSubmitting, setFormIsSubmitting] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState("");
  const [active, setActive] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const getCurrentUser = async () => {
      try {
        const { data, status } = await axios.post("/api/user/me");
        if (status === 200) {
          setUser({
            username: data.user.username,
            email: data.user.email,
            isAdmin: data.user.isAdmin,
            isVerified: data.user.isVerified,
            userId: data.user._id,
          });
          setIsUserLoggedIn(true);
        }
      } catch (error: unknown) {
        setIsUserLoggedIn(false);
        setUser({} as userInfoType);
      } finally {
        setIsLoading(false);
      }
    };
    getCurrentUser();
  }, [isUserLoggedIn, setUser, setIsUserLoggedIn]);

  const handleLogout = async () => {
    setFormIsSubmitting(true);
    try {
      const { data, status } = await axios.get("/api/user/sign-out");
      if (status === 200) {
        toast.success(data.message);
        router.replace("/");
        setIsUserLoggedIn(false);
      }
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data?.error || "An error occurred");
      } else {
        toast.error("An error occurred");
      }
      setIsUserLoggedIn(true);
    } finally {
      setFormIsSubmitting(false);
    }
  };

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
          {!isUserLoggedIn ? (
            <div className="flex-center gap-4">
              <Link href={"/sign-in"}>
                {!isLoading ? (
                  <button type="button" className="black_btn">
                    Sign In
                  </button>
                ) : (
                  <div className="medium-loader" />
                )}
              </Link>
              <Link href={"/sign-up"}>
                <button type="button" className="black_btn">
                  Sign Up
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex-center gap-4">
              <Link href={"/profile"}>
                {!isLoading ? (
                  <button className="black_btn size-4 h-full rounded-full text-2xl ">
                    {String(user?.username).charAt(0).toUpperCase()}
                  </button>
                ) : (
                  <div className="medium-loader" />
                )}
              </Link>
              <Button
                isFormSubmitting={isFormSubmitting}
                className="outline_btn"
                onClick={() => handleLogout()}
              >
                {"Logout"}
              </Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
