"use client"
import React from 'react'
import Hero from '../app/components/HeroSection/Hero'
import Skill from './components/MyServiceSection/Service'
import MyWork from '../app/components/MyWorkSection/MyWork'
import About from '../app/components/About/About'
const page = () => {
  return (
<>
    <div className=''>
      <Hero/>
      <About/>
      <MyWork/>
      <Skill/>
    </div>
</>
  )
}

export default page
