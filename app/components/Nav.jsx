"use client";
import Link from "next/link";
import React from "react";
import Container from "./ContainerComponent/Container";
import {  IconMenu3 } from "@tabler/icons-react";
const Nav = () => {
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
  const close="{ ClOSE }"
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
        <div className="relative hidden lg:block cursor-pointer group overflow-hidden border rounded-full hover:border-transparent">
          <div className="px-6 py-3 text-lg font-medium uppercase rounded-full">
            <span className="group-hover:text-white">say me hi</span>
          </div>
          <div className="w-full h-full absolute z-[-1] inset-0 bg-black rounded-full transition-all duration-500 translate-y-full group-hover:translate-y-0"></div>
        </div>
        <IconMenu3 className="block lg:hidden"/>
        {/*responsie navbar */}
        <div className="w-full h-full fixed top-0 left-0 z-50 pt-5 bg-gray-50 px-5 ">
          <div className="flex justify-between items-center pb-5">
           <span className="text-xl font-bold">UXMIR</span>
          <span>{close}</span>
          </div>
        <div className="flex flex-col gap-y-2">
       {
        navItemResponsive.map((item)=>(
          <div key={item.id} className="text-3xl font-medium uppercase">
          <span>{item.item}</span>
          </div>
        ))
       }
        </div>
         <div className="flex justify-between w-full  items-center uppercase mt-20">
          <a href="#">Linkedin</a>
          <a href="#">github</a>
         </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
