"use client";
import React, { createContext, useEffect, useRef, useState } from "react";
import { useContext } from "react";
export const ScrollSectionContext = createContext();
function ScrollSectionProvider({ children }) {
const sectionRefs={
    about:useRef(null),
    work:useRef(null),
    service:useRef(null),
    contact:useRef(null)
} 
  const scrollToSection = (sectionName) => {
   const targetSection=sectionRefs[sectionName]
   if(targetSection&& targetSection.current){
    targetSection.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
   }
  };
  return (
    <ScrollSectionContext.Provider value={{ scrollToSection,sectionRefs }}>
      {children}
    </ScrollSectionContext.Provider>
  );
}

export default ScrollSectionProvider;

export const useScroll = () => useContext(ScrollSectionContext);
