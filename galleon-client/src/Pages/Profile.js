import React from "react";
/* import ExpenseCard from "../Components/ExpenseCard";
import IncomeCard from "../Components/IncomeCard"; */
import Wallet from "../Components/Wallet";
import ExpenseList from "./ExpenseList";
import IncomeList from "./IncomeList"

function Profile() {
  return (
    <div className="">
      <div>
        <Wallet />
        <div>
          <IncomeList />
          <ExpenseList />
        </div>
        Upcoming Chart 
        </div>

   
    </div>
  );
}

export default Profile;
