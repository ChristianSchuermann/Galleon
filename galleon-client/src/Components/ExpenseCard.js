import { useState } from "react";
import axios from "axios";

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
  const [description, setDescription] = useState(expenseDescription);
  const [expense, setExpense] = useState(expenseValue);
  const [category, setCategory] = useState(expenseCategory);

  const submitExpense = (e) => {
    e.preventDefault();
    setEditDisabled(true);

    const requestBody = { title, description, category, expense };
    const storedToken = localStorage.getItem("authToken");
    axios
      .put(`${API_URL}/api/expense/${expenseId}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // the api should return the updated object (income)
        const updatedExpense = response.data;
        setTitle(updatedExpense.title);
        setDescription(updatedExpense.description);
        setCategory(updatedExpense.category);
        setExpense(updatedExpense.expense);
        console.log("response: ", response.status);
        console.log("updated income: ", response.data);
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

  const changeDescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const changeExpense = (e) => {
    e.preventDefault();
    setExpense(e.target.value);
  };

  const changeCategory = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  return (
    <div className="box-border py-10 w-60  rounded-3xl flex items-center justify-center">
      <form>
        <input disabled={editDisabled} value={title} onChange={changeTitle} />
        <input
          disabled={editDisabled}
          value={description}
          onChange={changeDescription}
        />
        <input
          disabled={editDisabled}
          value={expense}
          onChange={changeExpense}
        />
        <input
          disabled={editDisabled}
          value={category}
          onChange={changeCategory}
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
