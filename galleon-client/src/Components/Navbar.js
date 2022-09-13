import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useState } from "react";
import { AuthContext } from '../context/auth.context';

function Navbar() {
  const NewUserLinks = [

    { name: "ʛ Sign Up", link: "/signup" },
    { name: "ʛ Login", link: "/login" }
  ];

  const UserLinks = [

    { name: "ʛ Profile", link: "/profile" }
    
  ];

  const [open, setOpen] = useState(false);
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <div className="shadow-md w-full  top-0 left-0 bg-[#7F3DFF]">
        <div className="md:flex items-center justify-between bg-[#7F3DFF] md:px-10 px-7">
          {" "}
          {/* Navbar */}
          <div
            className="font-bold text-3xl curser-pointer flex items-center font-[Poppins]
        text-[#FCAC12] bg-[#7F3DFF]" //Icon & Name
          >
            <span className="text-3x1 text-[#FCAC12] mr-1 pt-2">
              {" "}
              {/* Icon */}
              <ion-icon name="cash-outline"></ion-icon>
            </span>
            ʛalleon
          </div>
          <div onClick={() => setOpen(!open)}  className="text-3x1 absolute right-8 top-6 curser-pointer md:hidden ">
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          {isLoggedIn && (
            <>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#7F3DFF]
                        md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all
                        duration-500 ease-in ${
                          open
                            ? "top-20 opacity-100 bg-[#7F3DFF]"
                            : "top-[-490px] bg-[#7F3DFF] md:opacity-100 opacity-0"
                        }`}
          >
            {UserLinks.map((link) => (
              <li key={link.name} className="md:ml-8 text-x1 md:-0 my-7 bg-[#7F3DFF]">
                <Link to={link.link} className="text-gray-400 hover:text-[#FCAC12] duration-500 bg-[#7F3DFF]">
                  {" "}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <button onClick={logOutUser}>Logout</button>
          </>
            )}
            {!isLoggedIn && (
            <>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#7F3DFF]
                        md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all
                        duration-500 ease-in ${
                          open
                            ? "top-20 opacity-100 bg-[#7F3DFF]"
                            : "top-[-490px] bg-[#7F3DFF] md:opacity-100 opacity-0"
                        }`}
          >
            {NewUserLinks.map((link) => (
              <li key={link.name} className="md:ml-8 text-x1 md:-0 my-7 bg-[#7F3DFF]">
                <Link to={link.link} className="text-gray-400 hover:text-[#FCAC12] duration-500 bg-[#7F3DFF]">
                  {" "}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          </>
            )}
        </div>
  
      </div>
    </nav>
  );
}

export default Navbar;
