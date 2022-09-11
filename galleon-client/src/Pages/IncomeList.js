import { useState, useEffect } from "react";
import axios from "axios";

import IncomeCard from "../Components/IncomeCard";
import AddIncome from "../Components/AddIncome";

const API_URL = "http://localhost:5005";

function IncomeList() {
  const [incomes, setIncomes] = useState([]);

  const getAllIncomes = () => {
    const storedToken = localStorage.getItem("authToken");
    
  axios
    .get(
    `${API_URL}//profile/income`,
    { headers: { Authorization: `Bearer ${storedToken}` } }
  )
    .then((response) => setIncomes(response.data))
    .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllIncomes();
  }, [] );

  
  return (
    <div className="IncomeList">
      
      <AddIncome refreshIncomes={getAllIncomes} />
      
      { incomes.map((income) => <IncomeCard key={income._id} {...income} />  )} 
       
    </div>
  );
}

export default IncomeList;

