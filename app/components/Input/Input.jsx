"use client";
import React from "react";

const Input = ({ inputType, inputName, placeHolder }) => {
  return (
    <div>
      <input
        type={inputType}
        name={inputName}
        placeholder={`${placeHolder} *`}
        required
        className="w-full py-2 text-gray-800 placeholder:text-gray-800 text-lg md:text-xl border-b outline-none focus:outline-none"
      />

    </div>
  );
};

export default Input;
