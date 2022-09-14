import { useState, useEffect } from "react";
import axios from "axios";
import ProgressBar from "./ProgressBar";

const API_URL = "http://localhost:5005";

function Wallet({ amount, max }) {
  let expenseTotal = 0;
  let incomeTotal = 0;

  const [walletExpense, setWalletExpense] = useState([]);
  const [walletIncome, setWalletIncome] = useState([]);

  const getExpense = () => {
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/api/expense`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setWalletExpense(response.data))
      .catch((error) => console.log(error));

    axios
      .get(`${API_URL}/api/income`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setWalletIncome(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getExpense();
  }, []);

  walletExpense.map((_expense) => {
    expenseTotal += _expense.expense;
  });

  walletIncome.map((_income) => {
    incomeTotal += _income.income;
  });

 


  return (
    <>
      <div className="circle border-2 py-10 w-60  rounded-3xl">

        <div className="flex flex-col justify-center items-center mt-5">
        <h1>Your total income:  {incomeTotal}</h1>
        <h1>Your total expense:  {expenseTotal}</h1>
        <h1>Remaining: {incomeTotal - expenseTotal}</h1>
        </div>
      </div>
      <ProgressBar progressPercentage={"percentage"} />
      </>
  );
}

export default Wallet;