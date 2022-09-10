import React from "react";
// eslint-disable-next-line
import { Link } from "react-router-dom";
import { Icons } from "./Icons";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-[#7F3DFF] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#7F3DFF] py-7">
        <h1 className="lg:text-4x1 text-3x1 md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#FCAC12]">ʛalleon</span> <span>created by</span> <br/> Ece Çakmak <span><SocialIcons Icons={Icons}/></span> &  <div> Christian Schuermann <SocialIcons Icons={Icons}/> </div>
          
        </h1>
      </div>
      <div className="grid grid-grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-grey-800 text-sm pb-8">
        <span>© 2022 Galleon. All rights reserved.</span>
        <span>Terms • Privacy Policy</span>
      </div>
    </footer>
  );
};

export default Footer;
