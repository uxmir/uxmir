"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap, { ScrollTrigger } from "../../../lib/gsap-config";
import SplitType from "split-type";
import Container from "../ContainerComponent/Container";
const Footer = () => {
  return (
    <>
      <div className="pt-20 lg:pt-40 pb-10">
        <Container>
          <div className="flex flex-col gap-y-4 sm:flex-row justify-between items-start sm:items-center w-full ">
            <div className="flex flex-col gap-y-2 text-lg sm:text-xl">
              <a href="https://github.com/uxmir">Github</a>
              <a href="https://www.linkedin.com/in/uxmir/">Linkedin</a>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="flex  items-start cursor-pointer  group">
                <div className="flex flex-col gap-y-2 items-start">
                  <span className=" max-[350px]:block hidden  text-xl  md:text-4xl font-medium">
                    mirmuniruzzaman <br></br>303@gmail.com
                  </span>
                  <span className=" max-[350px]:hidden block  text-xl  md:text-4xl font-medium">
                    mirmuniruzzaman303@gmail.com
                  </span>
                  <span className="w-0 group-hover:w-1/2 h-[2px] transition-all duration-500 bg-black"></span>
                </div>
              </div>
              <div className="flex  items-start cursor-pointer  group">
                <div className="flex flex-col gap-y-2 items-start">
                  <span className="  text-xl  md:text-4xl font-medium">
                    +880 1943-254037
                  </span>
                  <span className="w-0 group-hover:w-1/2 h-[2px]  transition-all duration-500 bg-black"></span>
                </div>
              </div>
            </div>
          </div>
          {/*footerText */}
          <FooterText />
        </Container>
      </div>
    </>
  );
};

export default Footer;

function FooterText() {
  const headingFooter = useRef(null);
  useLayoutEffect(() => {
    const footerAnimation = gsap.context(() => {
      const text = new SplitType(headingFooter.current, { types: "chars" });
      gsap.from(text.chars, {
        y: 420,
        duration: 1.8,
        stagger: {
          amount: 0.8,
          from: "center",
        },
        scrollTrigger: {
          trigger: headingFooter.current,
          scroller: "body",
        },
      });
    });
    return () => {
      footerAnimation.revert();
      headingFooter.revert();
    };
  }, []);
  return (
    <>
      <div className="mt-10">
        <h1
          ref={headingFooter}
          className="text-center overflow-hidden text-4xl md:text-6xl lg:text-7xl xl:text-[160px] font-semibold uppercase leading-none"
        >
          mir moniruzzaman
        </h1>
        <div className="flex justify-end ">
          <p className="w-[290px] text-sm">
            &copy;{new Date().getFullYear()}All right reserved. Any
            reproduction, distribution, or use of the materials without
            permission is prohibited.
          </p>
        </div>
      </div>
    </>
  );
}
