"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap, { ScrollTrigger } from "../../../lib/gsap-config.js";
import SplitType from "split-type";
const Heading = ({ headingValue }) => {
  const headingSection = useRef(null);
  const headingContainer = useRef(null);
  useLayoutEffect(() => {
    const headingAnimation = gsap.context(() => {
      const headingText = new SplitType(headingSection.current, {
        types: "chars",
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingContainer.current,
          scroller: "body",
        },
      });
      tl.from(headingText.chars, {
        y: -160,
        duration: 1,
        ease: "power2.inOut",
        stagger: {
          amount: 0.8,
          from: "center",
        },
      });
    });
    return () => headingAnimation.revert();
  }, []);
  return (
    <div
      ref={headingContainer}
      className="text-center overflow-hidden text-3xl md:text-4xl  xl:text-6xl font-semibold uppercase"
    >
      <span ref={headingSection}>{headingValue}</span>
    </div>
  );
};

export default Heading;
