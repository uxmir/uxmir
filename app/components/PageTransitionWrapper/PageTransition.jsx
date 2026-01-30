"use client";
import React, { useState,useEffect, useLayoutEffect } from "react";
import gsap from "../../../lib/gsap-config";
import SplitType from "split-type";
import { usePathname } from "next/navigation";
function PageTransition({ children }) {
  const pathName = usePathname();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (document.readyState === "complete") {
      setIsLoaded(true);
    } else {
      const handleLoad = () => setIsLoaded(true);
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);
  useLayoutEffect(() => {
    if (!isLoaded) return;
    const transitionAnimation = gsap.matchMedia();
    const tl = gsap.timeline();
    const text = new SplitType(".text", { types: "chars" });
    transitionAnimation.add("(max-width:439px)", () => {
      tl.from(text.chars, {
        y: -100,
        duration: 1,
        stagger: {
          amount: 0.9,
          from: "center",
        },
      }).to(text.chars, {
        y: 100,
        duration: 1,
        delay: 1,
        stagger: {
          amount: 0.9,
          from: "center",
        },
      });
    });
    transitionAnimation.add("(min-width:440px)", () => {
      tl.to([".image-left", ".image-right"], {
        x: (index) => {
          if (index === 0) return "-120%";
          if (index === 1) return "120%";
          return 0;
        },
        duration: 0.8,
        delay: 3,
      })
        .fromTo(
          [".image-left", ".image-right"],
          {
            clipPath: "inset(0% 0% 0% 0%)",
          },
          {
            clipPath: "inset(0% 0% 100% 0%)",
            ease: "sine.inOut",
            duration: 2,
          },
        )
        .fromTo(
          ".image-middle",
          {
            clipPath: "inset(0% 0% 0% 0%)",
          },
          {
            clipPath: "inset(100% 0% 0% 0%)",
            ease: "sine.inOut",
            duration: 2,
          },
        );
    });
    tl.fromTo(
      ".transition-container",
      {
        y: "0%",
      },
      {
        y: "-100%",
        ease: "sine.inOut",
        duration: 2,
      },
    );
    return () => transitionAnimation.revert();
  }, [isLoaded, pathName]);
  return (
    <>
      <div className="w-full h-full fixed top-0 translate-y-0 pointer-events-none left-0 right-0 z-[99999999] bg-black transition-container">
        <div className="flex justify-center items-center mt-50">
          <div className="relative hidden sm:block sm:mr-40 lg:mr-70 xl:mr-80">
            <div className=" w-40 h-60 lg:w-70 lg:h-90 absolute inset-0 image-left ">
              <img
                src="/myphoto 1.png"
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-40 h-60 lg:w-70 lg:h-90 absolute inset-0 image-right ">
              <img
                src="/my photo solid 2.png"
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-40 h-60 lg:w-70 lg:h-90  absolute inset-0 image-middle">
              <img
                src="/image (1).png"
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/*for responsiveness */}
          <h1 className="text-center block sm:hidden text text-2xl font-bold text-white uppercase overflow-hidden">
            welcome to my portfolio
          </h1>
        </div>
      </div>
      <main>{children}</main>
    </>
  );
}

export default PageTransition;
