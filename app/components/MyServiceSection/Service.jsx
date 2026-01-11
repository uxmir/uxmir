"use client";
import React, { useLayoutEffect, useRef } from "react";
import Container from "../ContainerComponent/Container.jsx";
import Heading from "../HeadingComponent/Heading.jsx";
import gsap, { ScrollTrigger } from "../../../lib/gsap-config.js";
import { IconSparkles2 } from "@tabler/icons-react";
const Skill = () => {
  const cardContainer = useRef(null);
  const serviceCard = [
    {
      id: 1,
      heading: "ux/ui",
      bodyText:
        "UX/UI design is focused on creating user-centered, intuitive, and visually consistent digital experiences. Proper UX planning improves usability and flow, while strong UI design enhances clarity, accessibility, and brand identity across products.",
      skillTags: [
        { id: 1, tags: "Figma Design" },
        { id: 2, tags: "Web Design" },
        { id: 3, tags: "App Design" },
      ],
      card_number: "0.1",
    },

    {
      id: 2,
      heading: "web design",
      bodyText:
        "Web design focuses on creating modern, responsive, and conversion-focused websites. Clean layouts, proper spacing, and consistent visual hierarchy help users navigate easily and engage effectively with content.",
      skillTags: [
        { id: 1, tags: "Web Design" },
        { id: 2, tags: "Responsive Design" },
        { id: 3, tags: "Modern Layout" },
      ],
      card_number: "0.2",
    },
    {
      id: 3,
      heading: "web development",
      bodyText:
        "Front-end web development focuses on building fast, scalable, and responsive interfaces. Using modern frameworks like React and Next.js ensures high performance, SEO optimization, and a smooth user experience.",
      skillTags: [
        { id: 1, tags: "Web Development" },
        { id: 2, tags: "Api Intregation" },
        { id: 3, tags: "State Management" },
      ],
      card_number: "0.3",
    },
    {
      id: 4,
      heading: "web animation",
      bodyText:
        "Web animation enhances user experience by adding motion, feedback, and visual storytelling. Smooth animations make interfaces more engaging while maintaining performance and usability.",
      skillTags: [
        { id: 1, tags: "Web animation" },
        { id: 2, tags: "modern design" },
        { id: 3, tags: "gsap & Three.JS intregation" },
      ],
      card_number: "0.4",
    },
  ];
  //stack animation
  useLayoutEffect(() => {
    const stackCardAnimation = gsap.context(() => {
      const cards = gsap.utils.toArray(".card");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardContainer.current,
          scroller: "body",
          start: "top top",
          end: `+=${cards.length * 100}%`,
          scrub: 1,
          pin: true,
        },
      });
      cards.forEach((card, index) => {
        if (index !== 0) {
          tl.fromTo(
            card,
            {
              y: "100vh",
            },
            {
              y: `${index * 2}%`,
            }
          );
        }
      });
    });
    return () => stackCardAnimation.revert();
  }, []);
  return (
    <div className=" my-20 lg:my-40 xl:my-60 bg-black rounded-4xl md:rounded-[100px] py-18  md:py-30">
      <Container>
        <Heading headingValue={"my services"} color="text-white" />
        <div
          ref={cardContainer}
          className="w-full h-screen flex justify-center items-center"
        >
          <div className="w-full max-[350px]:h-[83vh] h-[75vh]  relative">
            {serviceCard.map((card) => (
              <div
                key={card.id}
                className="w-full card h-full px-6  md:px-16 py-6 md:py-16 absolute inset-0 flex flex-col sm:flex-row justify-between gap-2  bg-white border border-gray-200 rounded-4xl"
              >
                <div className="">
                  <div className="max-[350px]:text-xl text-3xl xl:text-5xl font-medium uppercase flex items-center gap-x-3">
                    <IconSparkles2 className=" min-w-8 min-h-8  sm:w-10 sm:h-10 lg:w-20 lg:h-20" />
                    <span className=""> {card.heading}</span>
                  </div>
                  <p className="text-gray-500 max-[350px]:w-[220px]   w-[300px] xl:w-[700px] mt-5">
                    {card.bodyText}
                  </p>
                </div>
                <div className="flex  flex-col-reverse gap-y-6  lg:flex-row gap-x-16  xl:pr-30 items-start lg:items-center">
                  <div className="flex flex-col gap-y-3">
                    {card.skillTags.map((tag) => (
                      <div
                        key={tag.id}
                        className="px-6 py-3 bg-gray-200 rounded-full text-base xl:text-xl capitalize flex justify-center items-center text-center"
                      >
                        {tag.tags}
                      </div>
                    ))}
                  </div>
                  <div className=" text-3xl sm:text-6xl ">
                    {card.card_number}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skill;
