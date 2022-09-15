import React from "react";

export const Button = (props) => {
  return (
    <button
      className="bg-[#FFFFFF] text-[#7F3DFF] font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-purple-400
    duration-500"
    >
      ʛ Get Started
      {props.children}
    </button>
  );
};
