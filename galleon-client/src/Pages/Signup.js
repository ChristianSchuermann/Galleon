import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const requestBody = { email, password, firstName, lastName };

    axios
<<<<<<< HEAD
      .post(`http://localhost:5005/auth/signup`, requestBody)
=======
      .post(API_URL, requestBody)
>>>>>>> b62d3f1b4172d9e756f915bc6280f60e0a59e873
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        const errorDescription = error?.response?.data?.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="grid grid-cols-1 mx">
<<<<<<< HEAD

 
     
      <div className=" flex flex-col justify-center  mt-16 mb-40">
=======
{/*       <img
        className="w-86 h-86 z-10 ml-64 absolute "
        src={galleons}
        alt="Galleons"
      />
 */}

     

      <div className=" flex flex-col justify-center z-20 mt-16 mb-40">

>>>>>>> b62d3f1b4172d9e756f915bc6280f60e0a59e873
        <form
          className="max-w-[500px]  max-h-[400] w-full mx-auto bg-[#7F3DFF] p-12 px-11 rounded-lg"
          onSubmit={handleSignupSubmit}
        >
          <h2 className="text-4x1 text-white font-bold text-center">
            {" "}
            Sign up!
          </h2>
          <div className="flex flex-col text-white py-2">
            <label>First Name:</label>
            <input
              className="rounded-lg bg-white mt-2 p-2 focus:border-[#00A86B] focus:outline-none text-black"
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleFirstName}
            />
          </div>
          <div className="flex flex-col text-white py-2">
            <label>Last Name:</label>
            <input
              className="rounded-lg bg-white mt-2 p-2 focus:border-[#00A86B] focus:outline-none text-black"
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleLastName}
            />
          </div>
          <div className="flex flex-col text-white py-2">
            <label>Email:</label>
            <input
              className="rounded-lg bg-white mt-2 p-2 focus:border-[#00A86B] focus:outline-none text-black"
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="flex flex-col text-white py-2">
            <label>Password:</label>
            <input
              className="rounded-lg bg-white mt-2 p-2 focus:border-[#00A86B] focus:outline-none text-black"
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
            />
          </div>

          <div className="w-full my-5 py-2 rounded-lg font-semibold  bg-white hover:bg-violet-400 text-[#7F3DFF]">
            <button className="w-full" type="submit">
              {" "}
              ʛ Sign Up
            </button>
          </div>
          <div className="flex justify-center text-white">
            <p>Already have an account?</p>

            <Link className="text-white hover:text-violet-400 ml-2" to={"/login"}>ʛ Login</Link>
          </div>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Signup;
