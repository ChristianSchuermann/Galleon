import React from "react";
// eslint-disable-next-line
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#7F3DFF] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#7F3DFF] py-7">
        <h1 className="lg:text-4x1 text-3x1 md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#FCAC12]">Github</span>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
