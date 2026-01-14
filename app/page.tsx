"use client"
import React from 'react'
import Hero from '../app/components/HeroSection/Hero'
import Skill from './components/MyServiceSection/Service'
import MyWork from '../app/components/MyWorkSection/MyWork'
import About from '../app/components/About/About'
import Contact from '../app/components/Contact/Contact'
import { useScroll } from './Provider/ScrollSectionProvider'
const page = () => {
  const {sectionRefs}=useScroll()
  return (
<>
    <div className=''>
      <Hero/>
      <div ref={sectionRefs.about}>
        <About/>
      </div>
    <div ref={sectionRefs.work}>
        <MyWork/>
    </div>
      <div ref={sectionRefs.service}>
        <Skill/>
      </div>
      <div ref={sectionRefs.contact}>
         <Contact/>
      </div>
    </div>
</>
  )
}

export default page
