import "./App.css";
import { Routes, Route } from "react-router-dom";

/* import the pages */

import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Error from "./Pages/Error";
/* import IncomeList from "./Pages/IncomeList";
import ExpenseList from "./Pages/ExpenseList";
import EditExpense from "./Pages/EditExpense";
import EditIncome from "./Pages/EditIncome"; */

/* Import the components */

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import IsAnon from "./Components/IsAnon";
/* import IsPrivate from "./Components/IsPrivate"; */

function App() {
  return (
    <div>
      <Navbar />

      <br />
      <br />
      <br />

      <div className="w-full h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signup"
            element={
              <IsAnon>
                <Signup />
              </IsAnon>
            }
          />
          <Route
            path="/login"
            element={
              <IsAnon>
                <Login />
              </IsAnon>
            }
          />
          <Route path="/profile/" element={<Profile />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
