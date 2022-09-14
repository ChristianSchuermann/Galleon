import { useState } from "react";
import axios from "axios";

import { Dropdown } from "react-dropdown-now";

const API_URL = "http://localhost:5005";

// We are deconstructing props object directly in the parentheses of the function
function ExpenseCard({
  expenseTitle,
  expenseDescription,
  expenseValue,
  expenseCategory,
  expenseId,
}) {
  const [editDisabled, setEditDisabled] = useState(true);

  const [title, setTitle] = useState(expenseTitle);
  const [expense, setExpense] = useState(expenseValue);
  const [category, setCategory] = useState([expenseCategory]);

  const submitExpense = (e) => {
    e.preventDefault();
    setEditDisabled(true);

    const requestBody = { title, category, expense };
    const storedToken = localStorage.getItem("authToken");
    axios
      .put(`${API_URL}/api/expense/${expenseId}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // the api should return the updated object (expense))
        const updatedExpense = response.data;
        setTitle(updatedExpense.title);
        setCategory(updatedExpense.category);
        setExpense(updatedExpense.expense);
      })
      .catch((error) => console.log(error));
  };

  const deleteExpense = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${API_URL}/api/expense/${expenseId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const toggleEdit = (e) => {
    e.preventDefault();
    setEditDisabled(false);
  };

  const changeTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const changeExpense = (e) => {
    e.preventDefault();
    setExpense(e.target.value);
  };

  const changeCategory = (e) => {

    setCategory(e.value);
  };


  return (
    <div className="box-border py-10 w-60  rounded-3xl flex items-center justify-center">
      <form>
        <input disabled={editDisabled} value={title} onChange={changeTitle} />

        <input
          disabled={editDisabled}
          value={expense}
          onChange={changeExpense}
        />
        <Dropdown
          disabled={editDisabled}
          placeholder={category}
          options={["Rent", "Food", "Bills", "Shopping", "Transportation", "Entertainment", "other..."]}
          value={category}
          onChange={(value) => changeCategory(value)}
          onSelect={(value) => changeCategory(value)}
          onClose={(closedBySelection) =>
            console.log("closedBySelection?:", closedBySelection)
          }
          onOpen={() => console.log("open!")}
        />
      </form>
      {editDisabled ? <button onClick={toggleEdit}>Edit Expense</button> : null}
      {editDisabled ? null : (
        <button onClick={deleteExpense}>Delete Expense</button>
      )}
      {editDisabled ? null : (
        <button onClick={submitExpense}>Submit Expense</button>
      )}
    </div>
  );
}

export default ExpenseCard;
