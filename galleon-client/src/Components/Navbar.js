import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context"; 

function Navbar() {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext); 
  
    return (
      <nav>
  
        {isLoggedIn && (
          <>
          <span>Welcome back {user.firstName} {user.lastName}!</span>
          <br/>

            <Link to="/">
              <button>Home</button>
           </Link>

            <Link to="/income">
              <button>Your Incomes</button>
            </Link>

            <Link to="/expense">
              <button>Your Expenses</button>
            </Link>
{/* 
            <Link to="/ThisRoundThingyWhereUCanSeeIncomeAndExpenseAsACake">
              <button>Compare them!</button>
            </Link> */}

            <button onClick={logOutUser}>Logout</button>
          </>
        )}
   
        {!isLoggedIn && (
          <><br/>
            <br/>
            <Link to="/">
                <button>Home</button>
            </Link>
            <br/>
            <br/>
            <Link to="/signup">
                <button>Sign Up</button>
            </Link>
            <br/>
            <br/>
            <Link to="/login">
                <button>Login</button>
            </Link>
          </>
        )}
      </nav>
    );
  }
  
  export default Navbar;
  