"use client";
import Link from "next/link";
import React, { useRef } from "react";
import Button from '../components/Button/Button'
import gsap from "../../lib/gsap-config";
import { IconMenu3 } from "@tabler/icons-react";
const Nav = () => {
  const navContainer = useRef(null);
  const navItem = [
    { id: 1, item: "{ work }" },
    { id: 2, item: "{ about }" },
    { id: 3, item: "{ services }" },
    { id: 4, item: "{ contact }" },
  ];
  const navItemResponsive = [
    { id: 1, item: " work " },
    { id: 2, item: "about " },
    { id: 3, item: "services" },
    { id: 4, item: "contact" },
  ];
  const close = "{ ClOSE }";
  //menobaranimationlogic
  const showMenu = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      navContainer.current,
      {
        y: "-100%",
      },
      {
        y: "0%",
        duration: 1,
      }
    ).fromTo(".nav-text",{y:70}, {
      y: 0,
      duration: 1,
      stagger: 0.5,
    });
  };
  const closeMenu = () => {
    const tl = gsap.timeline();
    tl.to(".nav-text", {
      y: -70,
      duration: 1,
      stagger: 0.5,
    })
    .fromTo(
      navContainer.current,
      {
        y: "0%",
      },
      {
        y: "-100%",
        duration: 1,
      }
    );
  };
  return (
    <>
      <div className="w-full flex justify-between items-center  sticky py-5 z-10 px-5  lg:px-[100px]">
        <span className="text-3xl font-bold">UXMIR</span>
        <div className="lg:flex items-center gap-x-4 hidden">
          {navItem.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-x-0.5 text-lg uppercase"
            >
              <span>{item.item}</span>
            </div>
          ))}
        </div>
        <div className="hidden lg:block">
          <Button btnText={'Say me hi'}/>
        </div>
        <IconMenu3 onClick={showMenu} className="block lg:hidden" />
        {/*responsie navbar */}
        <div
          ref={navContainer}
          className="w-full h-full fixed top-0 left-0 z-50 pt-5 bg-gray-50 px-5 -translate-y-full"
        >
          <div className="flex justify-between items-center pb-5">
            <span className="text-xl font-bold">UXMIR</span>
            <span onClick={closeMenu} className="cursor-pointer">{close}</span>
          </div>
          <div className="flex flex-col gap-y-2">
            {navItemResponsive.map((item) => (
              <div
                key={item.id}
                className="text-3xl font-medium  uppercase overflow-hidden"
              >
                <span className="inline-block nav-text">{item.item}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between w-full  items-center uppercase mt-30">
            <a href="#">Linkedin</a>
            <a href="#">github</a>
          </div>
          <div className="flex flex-col gap-y-1 justify-center items-center mt-20">
            <p>mirmuniruzzaan303@gmail.com</p>
            <p>+8801943254037</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
