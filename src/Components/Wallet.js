import { useState, useEffect } from "react";
import axios from "axios";
import ProgressBar from "./ProgressBar";

const API_URL = "http://localhost:5005";

function Wallet() {
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

  function getPercentage(incomeTotal, expenseTotal) {
    let persentage =  ((expenseTotal *100) / incomeTotal).toFixed(2)
    console.log (persentage)
    return persentage
   } 


  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <div className="circle mb-10 py-10 ">

        <div className="flex flex-col justify-center items-center mt-8">
        <h1 className="text-white text-xl">Your total income:  {incomeTotal}</h1>
        <h1 className="text-white text-xl">Your total expense:  {expenseTotal}</h1>
        <h1 className="text-white text-xl">Remaining: {incomeTotal - expenseTotal}</h1>
        </div>
      </div>
      
     
      <ProgressBar progressPercentage={getPercentage(incomeTotal, expenseTotal) + "%"} />

      </div>
      </>
  );

}

export default Wallet;