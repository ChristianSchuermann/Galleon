import React from "react";
// eslint-disable-next-line
import { Link } from "react-router-dom";

export const Button = (props) => {
  return (
    <button
      className="bg-yellow-600 text-black font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-yellow-400
    duration-500"
    >
      ʛ Get Started
      {props.children}
    </button>
  );
};

//yellow from tailwindcss
