import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = "https://wandering-neckerchief-lion.cyclic.app";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser, setIsLoggedIn } =
    useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        setIsLoggedIn(true);
        navigate("/profile");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="grid grid-cols-1 mx">
      <div className=" flex flex-col justify-center mt-32 mb-40">
        <form
          className="max-w-[500px]  max-h-[400] w-full mx-auto bg-[#7F3DFF] p-12 px-11 rounded-lg"
          onSubmit={handleLoginSubmit}
        >
          <h2 className="text-4x1 text-white font-bold text-center">Log in!</h2>
          <div className="flex flex-col text-white py-2">
            <label>E-mail:</label>
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
              ?? Login
            </button>
          </div>
          <div className="flex justify-center text-white">
            <p>Don't have an account yet?</p>
            <Link
              className="text-white hover:text-violet-400 ml-2"
              to={"/signup"}
            >
              ?? Sign Up
            </Link>
          </div>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Login;
