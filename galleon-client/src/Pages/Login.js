import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import loginImg from "../Images/galleons2.png";

const API_URL = "http://localhost:5005";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
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
          onSubmit={handleLoginSubmit}
        >
          <h2 className="text-4x1 dark:text-white font-bold text-center">
            {" "}
            Log In
          </h2>
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
              ʛ Login
            </button>
          </div>
          <div className="flex justify-between text-white">
            <p>Don't have an account yet?</p>

            <Link
              className="text-white bg-[#FCAC12] p-1.5 px-1.5 rounded-lg shadow-lg shadow-[#FCAC12]/50"
              to={"/signup"}
            >
              Sign Up
            </Link>
          </div>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Login;
