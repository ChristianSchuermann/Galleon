import React from "react";
import Wallet from "../Components/Wallet";
import ExpenseList from "./ExpenseList";
import IncomeList from "./IncomeList"

function Profile() {
  return (
    <div className="grid-cols-2">
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
