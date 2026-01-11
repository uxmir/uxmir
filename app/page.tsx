"use client"
import React from 'react'
import Hero from '../app/components/HeroSection/Hero'
import Skill from './components/MyServiceSection/Service'
import MyWork from '../app/components/MyWorkSection/MyWork'
const page = () => {
  return (
<>
    <div className=''>
      <Hero/>
      <MyWork/>
      <Skill/>
    </div>
</>
  )
}

export default page
