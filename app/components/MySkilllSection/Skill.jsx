"use client";
import React, { useLayoutEffect, useRef } from "react";
import Container from "../ContainerComponent/Container";
import Heading from "../HeadingComponent/Heading";
import gsap, { ScrollTrigger } from "../../../lib/gsap-config.js";
const Skill = () => {
  const cardContainer = useRef(null);
  const skillCard = [
    { id: 1, text: "content 1" },
    { id: 2, text: "content 2" },
    { id: 3, text: "content 3" },
    { id: 4, text: "content 4" },
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
              y: `${index * 10}%`,
            }
          );
        }
      });
    });
    return () => stackCardAnimation.revert();
  }, []);
  return (
    <div className=" my-20 lg:my-40 xl:my-60">
      <Container>
        <Heading headingValue={"my skills"} />
        <div
          ref={cardContainer}
          className="w-full h-screen flex justify-center items-center"
        >
          <div className="w-full h-[60vh] relative">
            {skillCard.map((card) => (
              <div
                key={card.id}
                className="w-full card h-full absolute inset-0 bg-black text-4xl  text-white rounded-4xl"
              >
                <span>{card.text}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skill;
