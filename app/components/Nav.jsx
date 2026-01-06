"use client"
import Link from 'next/link'
import React from 'react'
const Nav = () => {
  return (
    <div className='flex gap-x-3 text-2xl'>
      <Link href={'/'}>Home</Link>
      <Link href={'/contact'}>Contact</Link>
    </div>
  )
}

export default Nav
