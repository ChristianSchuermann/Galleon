import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-dropdown-now";

const API_URL = "http://localhost:5005"

// We are deconstructing props object directly in the parentheses of the function
function ExpenseCard({
  expenseTitle,
  expenseValue,
  expenseCategory,
  expenseId,
  setAllExpense,
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

  const deleteExpenseChris = () => {
    console.log("Clicked");
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${API_URL}/api/expense/${expenseId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneExpense = response.data;
        console.log(response.data);
        setAllExpense(response.data);
      })
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
    <>
      <div className="w-52 m-5  border-2 border-red-400  ">
        <form className="flex flex-col pr-2 pl-2 my-2">
          <div className="flex">
            <input
              size="14"
              disabled={editDisabled}
              value={title}
              onChange={changeTitle}
            />

            <input
              maxlength="6"
              size="6"
              disabled={editDisabled}
              value={expense}
              onChange={changeExpense}
            />
          </div>

          <Dropdown
            disabled={editDisabled}
            placeholder={category}
            options={[
              "Rent",
              "Food",
              "Bills",
              "Shopping",
              "Transportation",
              "Entertainment",
              "other...",
            ]}
            value={category}
            onChange={(value) => changeCategory(value)}
            onSelect={(value) => changeCategory(value)}
            onClose={(closedBySelection) =>
              console.log("closedBySelection?:", closedBySelection)
            }
            onOpen={() => console.log("open!")}
          />
        </form>
        {editDisabled ? (
          <button
            className="btn-red w-52 py-1  mt-2 text-white grid content-center bg-[#FD3C4A]  font-bold "
            onClick={toggleEdit}
          >
            Edit Expense
          </button>
        ) : null}
        <div className="flex">
          {editDisabled ? null : (
            <button className="btn-green" onClick={submitExpense}>
              Submit Expense
            </button>
          )}
          {editDisabled ? null : (
            <button className="btn-red" onClick={deleteExpenseChris}>
              Delete Expense
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default ExpenseCard;
