import { Link } from "react-router-dom";
/* import { useContext } from "react";
import { AuthContext } from "../context/auth.context"; */
import { useState } from "react";
import { Button } from "./Button";

function Navbar() {
  const Links = [
    { name: "ʛ Home", link: "/" },
    { name: "ʛ Sign Up", link: "/signup" },
    { name: "ʛ Login", link: "/login" },
    { name: "ʛ Profile", link: "/profile" },
    { name: "ʛ Your Incomes", link: "/income" },
    { name: "ʛ Your Expenses", link: "/expense" },
  ];
  let [open, setOpen] = useState(false);
  /*   const { isLoggedIn, user, logOutUser } = useContext(AuthContext); */

  //violet from tailwind.config.js for navbar

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 bg-violet-600">
        <div className="md:flex items-center justify-between bg-violet-600 py-4 md:px-10 px-7">
          {" "}
          {/* Navbar */}
          <div
            className="font-bold text-2x1 curser-pointer flex items-center font-[Poppins]
        text-grey-800 bg-violet-600" //Icon & Name
          >
            <span className="text-3x1 text-yellow-600 mr-1 pt-2 bg-violet-600">
              {" "}
              {/* Icon */}
              <ion-icon name="cash-outline"></ion-icon>
            </span>
            Galleon
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3x1 absolute right-8 top-6 curser-pointer md:hidden bg-violet-600"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-violet-600
                        md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all
                        duration-500 ease-in ${
                          open
                            ? "top-20 opacity-100 bg-violet-600"
                            : "top-[-490px] bg-violet-600 md:opacity-100 opacity-0"
                        }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-x1 md:-0 my-7 bg-violet-600"
              >
                <Link
                  to={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500 bg-violet-600"
                >
                  {" "}
                  {link.name}
                </Link>
              </li>
            ))}
            <Button onClick={<Link to="/Signup"></Link>}></Button>
          </ul>
        </div>
        {/*  {isLoggedIn && (
          <>
          <span>Welcome back {user.firstName} {user.lastName}!</span>
          <br/> */}

        {/*             <Link to="/">
              <button> ʛ Home</button>
           </Link>
 */}
        {/*             <Link to="/income">
              <button> ʛ Your Incomes</button>
            </Link> */}

        {/*             <Link to="/expense">
              <button> ʛ Your Expenses</button>
            </Link> */}
        {/* 
            <Link to="/ThisRoundThingyWhereUCanSeeIncomeAndExpenseAsACake">
              <button>Compare them!</button>
            </Link> */}

        {/*             <button onClick={logOutUser}>Logout</button>
          </>
        )} */}

        {/*         {!isLoggedIn && (
          <><br/>
            <br/>
            <Link to="/">
                <button> ʛ Home</button>
            </Link>
            <br/>
            <br/>
            <Link to="/signup">
            <button > ʛ Sign Up</button>
            </Link>
            <br/>
            <br/>
            <Link to="/login">
                <button> ʛ Login</button>
            </Link>
          </>
        )} */}
      </div>
    </>
  );
}

export default Navbar;
