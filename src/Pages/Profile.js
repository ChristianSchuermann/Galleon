import React from "react";
import DoughnutChart from "../charts/Doughnut";
import Wallet from "../Components/Wallet";
import ExpenseListPage from "./ExpenseList";
import IncomeListPage from "./IncomeList";


function Profile() {
  return (
    <div>

      <div>
        <Wallet />

        <div className="flex flex-col md:flex-row">
          <div className="flex  w-1/2 justify-center md:flex-row">
            <div>
              <ExpenseListPage />
            </div>
            <div>
              <IncomeListPage />
            </div>
          </div>

          <div>
            <DoughnutChart />
          </div>
         </div>
      </div>
    </div> 
  );
}

export default Profile;
