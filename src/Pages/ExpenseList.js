import { useState, useEffect } from "react";
import axios from "axios";

import ExpenseCard from "../Components/ExpenseCard";
import AddExpense from "../Components/AddExpense";

const API_URL = "http://localhost:5005";

function ExpenseListPage() {
  const [expense, setExpense] = useState([]);

  const getExpense = () => {
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/api/expense`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setExpense(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getExpense();
  }, []);

  return (
    <div>
      <AddExpense refreshExpense={getExpense} />
      {expense.map((expense) => {
        return (
          <ExpenseCard
            key={expense._id}
            expenseId={expense._id}
            expenseTitle={expense.title}
            expenseValue={expense.expense}
            expenseCategory={expense.category}
          />
        );
      })}
    </div>
  );
}

export default ExpenseListPage;