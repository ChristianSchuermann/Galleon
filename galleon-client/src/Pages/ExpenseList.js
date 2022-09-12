import { useState, useEffect } from "react";
import axios from "axios";

import ExpenseCard from "../Components/ExpenseCard";
import AddExpense from "../Components/AddExpense";

const API_URL = "http://localhost:5005";

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  const getAllExpenses = () => {
    const storedToken = localStorage.getItem("authToken");
 
  axios
    .get(
    `${API_URL}/profile/expense`,
    { headers: { Authorization: `Bearer ${storedToken}` } }
  )
    .then((response) => setExpenses(response.data))
    .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllExpenses();
  }, [] );

  
  return (
    <div className="ExpenseList">
      
      <AddExpense refreshExpenses={getAllExpenses} />
      
      { expenses.map((expense) => <ExpenseCard key={expense._id} {...expense} />  )} 
       
    </div>
  );
}

export default ExpenseList;

