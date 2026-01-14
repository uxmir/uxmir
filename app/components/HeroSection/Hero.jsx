"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "../../../lib/gsap-config";
import Container from "../ContainerComponent/Container";
import SplitType from "split-type";

const Hero = () => {
  const heading = useRef(null);
  const myPhoto = useRef(null);
  const myPhotoResponsive = useRef(null);
  const introHeading = useRef(null);
  const introText = useRef(null);
  const skillData = [
    { id: 1, text: "#UX/UI" },
    { id: 2, text: "#Web Design" },
    { id: 3, text: "#Web Development" },
    { id: 4, text: "#Web animation" },
  ];
  useLayoutEffect(() => {
    const heroSectionAnimation = gsap.matchMedia();
    const tl = gsap.timeline();
    const text = new SplitType(heading.current, { types: "chars" });
    const subheading = new SplitType(introHeading.current, { types: "chars" });
    const bodyText = new SplitType(introText.current, { types: "lines" });
    heroSectionAnimation.add("(max-width:639px)", () => {
      tl.from(text.chars, {
        y: -160,
        opacity: 1,
        duration: 1,
        delay: 7,
        ease: "",
        stagger: {
          amount: 0.8,
          from: "center",
        },
      })
        .fromTo(
          myPhotoResponsive.current,
          {
            clipPath: "inset(0% 0% 100% 0%)",
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "sine.inOut",
            duration: 1,
          }
        )
        .from(".nav-item-responsive", {
          y: 152,
          opacity: 1,
          duration: 1,
          ease: "",
          stagger: {
            amount: 0.8,
            from: "start",
          },
        })
        .from(subheading.chars, {
          y: 120,
          opacity: 1,
          duration: 1,
          ease: "",
          stagger: {
            amount: 0.8,
            from: "start",
          },
        })
        .from(bodyText.lines, {
          y: 220,
          duration: 1,
          ease: "",
          stagger: {
            amount: 0.8,
            from: "start",
          },
        });
    });
    {
      /* animation for desktop*/
    }
    heroSectionAnimation.add("(min-width:640px)", () => {
      tl.from(text.chars, {
        y: -160,
        opacity: 1,
        duration: 1,
        delay: 7,
        ease: "",
        stagger: {
          amount: 0.8,
          from: "center",
        },
      })
        .from(".nav-item", {
          y: 152,
          opacity: 1,
          duration: 1,
          ease: "",
          stagger: {
            amount: 0.8,
            from: "start",
          },
        })
        .fromTo(
          myPhoto.current,
          {
            clipPath: "inset(0% 0% 100% 0%)",
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "sine.inOut",
            duration: 1,
          }
        )
        .from(subheading.chars, {
          y: 120,
          opacity: 1,
          duration: 1,
          ease: "",
          stagger: {
            amount: 0.8,
            from: "start",
          },
        })
        .from(bodyText.lines, {
          y: 120,
          opacity: 1,
          duration: 1,
          ease: "",
          stagger: {
            amount: 0.8,
            from: "start",
          },
        });
    });
    return () => {
      heroSectionAnimation.revert();
    };
  }, []);

  return (
    <div className="w-full mt-20">
      <Container>
        <h1
          ref={heading}
          className="text-center overflow-hidden text-4xl md:text-6xl lg:text-7xl xl:text-[160px] font-semibold uppercase leading-none"
        >
          Creative developer
        </h1>
        <div className=" w-full lg:w-[800px] 2xl:w-full mx-auto mt-2 hidden  sm:flex flex-col sm:flex-row justify-between sm:items-center overflow-hidden  uppercase">
          {skillData.map((data) => (
            <span key={data.id} className="nav-item inline-block">
              {data.text}
            </span>
          ))}
        </div>
        <div className="sm:flex justify-center items-center hidden">
          <img
            ref={myPhoto}
            src="/myphoto 1.png"
            alt="image"
            className="w-[300px] h-[350px]"
          />
        </div>
        <div className="flex items-end gap-x-5 sm:hidden mt-3">
          <img
            ref={myPhotoResponsive}
            src="/myphoto 1.png"
            alt="image"
            className=" max-[350px]:w-[100px] max-[350px]:h-[120px] w-[200px] h-[250px]"
          />
          <div className=" text-xs flex flex-col  gap-y-2 uppercase overflow-hidden">
            {skillData.map((data) => (
              <span
                key={data.id}
                className="nav-item-responsive overflow-hidden inline-block"
              >
                {data.text}
              </span>
            ))}
          </div>
        </div>
        <div className=" mt-20 sm:mt-30 flex flex-col sm:flex-row justify-between items-start overflow-hidden">
          <span
            ref={introHeading}
            className="font-medium uppercase overflow-hidden inline-block"
          >
            Hi I am MIR
          </span>
          <span
            ref={introText}
            className="max-w-[500px] overflow-hidden inline-block text-gray-500"
          >
            <span className="ml-5"> I’m a Front-end Developer </span> and
            Designer dedicated to building fast, interactive, and visually
            stunning websites. I bridge the gap between design and code to
            create products that people love to use.
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
