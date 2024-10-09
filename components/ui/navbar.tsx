"use client";

import React, { useState, useEffect } from "react";
import logodark from "@/assets/homepage/logo-darl.svg";
import logolight from "@/assets/homepage/logo-light.svg";
import Image from "next/image";
import navLinks, { NavLink } from "@/constants/index";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "../themes/theme-toggler";

export const MobileNavbar: React.FC<{ links: NavLink[] }> = ({ links }) => {
  const [mobile, setmobile] = useState(true);

  function togglemobile() {
    setmobile(false);
  }
  return (
    <>
      <div
        className={` ${
          mobile ? "fixed top-0 smooth z-40 bg-secondarybg w-fulll h-screen" : "hidden smooth"
        }`}
      >
        <div className="w-[299px] relative h-screen bg-secondarybg p-5">
          <div className="flex items-center justify-between">
            <div className="">
              <Image src={logodark} alt="logo" className="" />
            </div>
            <Button
              variant={"plain"}
              size={"icon"}
              onClick={togglemobile}
              className=" hover:rotate-180 smooth"
            >
              <X className="text-sm hover:rotate-180 smooth" />
            </Button>
          </div>
          <div className=" py-10">
            <ul className="flex flex-col gap-5">
              {links.map((link) => (
                <li
                  key={link.id}
                  className="text-sm hover:text-blog-blue smooth hover:dark:text-blog-blue dark:text-gray-dark text-gray-light"
                >
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="my-7 m-1 w-full absolute bottom-0">
            <Button
              variant={"link"}
              className=" text-blog-blue dark:text-white"
            >
              Sign in
            </Button>
            <br></br>
            <div className="mt-3">
              <Button
                variant={"rounded_primary"}
                size={"rounded"}
                className=" inter-500"
              >
                Create account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Navbar: React.FC<{ links: NavLink[] }> = ({ links }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobile, setmobile] = useState(false);

  function togglemobile() {
    setmobile(!mobile);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" relative">
      {mobile && <MobileNavbar links={navLinks} />}

      <main
        className={` w-full py-6 ${
          isScrolled
            ? " smooth scroll-smooth fixed top-0 bg-white dark:bg-primarybg z-30 "
            : "z-10 smooth relative bg-transparent"
        }`}
      >
        <section className="max-w-contain mx-auto w-full">
          <nav className="flex items-center justify-between">
            <div className="logo-and-links flex items-center gap-7">
              <div className="">
                <Image
                  src={logodark}
                  alt="logo"
                  className=" dark:block hidden"
                />
                <Image
                  src={logolight}
                  alt="logo"
                  className=" dark:hidden block"
                />
              </div>
              <ul className="md:flex hidden items-center gap-5">
                {links.map((link) => (
                  <li
                    key={link.id}
                    className="text-sm hover:text-blog-blue smooth hover:dark:text-blog-blue dark:text-gray-dark text-gray-light"
                  >
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" hidden sm:flex items-center gap-5">
              <Button
                variant={"link"}
                className=" text-blog-blue dark:text-white"
              >
                Sign in
              </Button>
              <div className="flex">
                <Button
                  variant={"rounded_primary"}
                  size={"rounded"}
                  className="   inter-500"
                >
                  Create account
                </Button>

              
              </div>
              <ModeToggle />
            </div>
            <div className=" md:hidden flex gap-5">
              <Button
                variant={"plain"}
                onClick={togglemobile}
                size={"icon"}
                className=" hover:rotate-180"
              >
                <Menu className="text-sm hover:rotate-180 smooth" />
              </Button>
              <div className="ds:flex sm:hidden">
                <ModeToggle />
              </div>
            </div>
          </nav>
        </section>
      </main>
    </div>
  );
};
