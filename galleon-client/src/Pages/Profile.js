import React from "react";
import AddExpense from "../Components/AddExpense";
import AddIncome from "../Components/AddIncome";
// import ExpenseCard from "../Components/ExpenseCard";
// import IncomeCard from "../Components/IncomeCard"; 
import Wallet from "../Components/Wallet";
import ExpenseListPage from "./ExpenseList";
import IncomeListPage from "./IncomeList";

function Profile() {
  return (
    <div>
      <div >
        <Wallet />
      <div className="flex">
        <div className="flex">
          <div >
            <ExpenseListPage />
          </div>
          <div >
            <IncomeListPage />
          </div>
        </div>

        <div>
        Upcoming Chart
        </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
