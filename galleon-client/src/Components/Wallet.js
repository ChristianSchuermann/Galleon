import { useState, useEffect } from "react";
import axios from "axios";

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

  // const classNames = [];
  // const ratio = expenseTotal  / incomeTotal;
  // if (ratio > 0.75) {
  //   classNames.push("bg-[#FD3C4A]", "bg-opacity-10");
  // } 
  // if ( 0.5 < ratio < 0.75) {
  //   classNames.push("bg-[#FCAC12]", "bg-opacity-10");
  // } 
  // else {
  //   classNames.push("bg-[#00A86B]", "bg-opacity-10");
  // }

  return (
    <div className={classNames.join(" ")}>
      <div className="border-2 py-10 w-60  rounded-3xl bg-[#FCAC12]">


      <h1>Your total income:  {incomeTotal}</h1>
      <h1>Your total expense:  {expenseTotal}</h1>
      <h1>Remaining: {incomeTotal - expenseTotal}</h1>


      </div>
    </div>
  );
}

export default Wallet;