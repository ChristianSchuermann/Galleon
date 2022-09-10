import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import loginImg from "../Images/galleons2.png";

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
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img
          className="w-full h-full object-cover"
          src={loginImg}
          alt="piggy bank"
        />
      </div>
      <div className="bg-[#FCAC12] flex flex-col justify-center">
        <form
          className="max-w-[500px]  max-h-[400] w-full mx-auto bg-[#7F3DFF] p-12 px-11 rounded-lg"
          onSubmit={handleSignupSubmit}
        >
          <h2 className="text-4x1 dark:text-white font-bold text-center">
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

          <div className="w-full my-5 py-2 bg-[#FCAC12] rounded-lg shadow-lg shadow-[#FCAC12]/50 hover:shadow-[#FCAC12]/25 text-white font-semibold">
            <button className="w-full bg-[#FCAC12]" type="submit">
              {" "}
              ʛ Sign Up
            </button>
          </div>
          <div className="flex justify-between text-white">
            <p>Already have an account?</p>

            <Link
              className="text-white bg-[#FCAC12] p-1.5 px-1.5 rounded-lg shadow-lg shadow-[#FCAC12]/50"
              to={"/login"}
            >
              {" "}
              ʛ Login
            </Link>
          </div>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Signup;
