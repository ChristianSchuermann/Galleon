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
        <div className="flex">
          <div className="flex">
            <div>
              <ExpenseListPage />
            </div>
            <div>
              <IncomeListPage />
            </div>
          </div>

          <div>
{/*             <DoughnutChart /> */}
          </div>
         </div>
      </div>
    </div> 
  );
}

export default Profile;
