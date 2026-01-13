"use client"
import React from 'react'

const Button = ({btnText}) => {
  return (
    <div>
          <div className="relative  cursor-pointer group overflow-hidden border rounded-full hover:border-transparent">
          <div className="px-6 py-3 text-lg font-medium uppercase rounded-full">
            <span className="group-hover:text-white">{btnText}</span>
          </div>
          <div className="w-full h-full absolute z-[-1] inset-0 bg-black rounded-full transition-all duration-500 translate-y-full group-hover:translate-y-0"></div>
        </div>
    </div>
  )
}

export default Button
