import { useState } from "react";
import axios from "axios";

import { Dropdown } from "react-dropdown-now";

const API_URL = "http://localhost:5005";

// We are deconstructing props object directly in the parentheses of the function
function IncomeCard({
  incomeTitle,
  incomeDescription,
  incomeValue,
  incomeCategory,
  incomeId,
}) {
  const [editDisabled, setEditDisabled] = useState(true);

  const [title, setTitle] = useState(incomeTitle);
  const [income, setIncome] = useState(incomeValue);
  const [category, setCategory] = useState(incomeCategory);

  const submitIncome = (e) => {
    e.preventDefault();
    setEditDisabled(true);

    const requestBody = { title, category, income };
    const storedToken = localStorage.getItem("authToken");
    axios
      .put(`${API_URL}/api/income/${incomeId}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // the api should return the updated object (income)
        const updatedIncome = response.data;
        setTitle(updatedIncome.title);
        setCategory(updatedIncome.category);
        setIncome(updatedIncome.income);
      })
      .catch((error) => console.log(error));
  };

  const deleteIncome = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${API_URL}/api/income/${incomeId}`, {
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

  const changeIncome = (e) => {
    e.preventDefault();
    setIncome(e.target.value);
  };

  const changeCategory = (e) => {
    setCategory(e.value);
  };

  return (
    <div className="box-border py-10 w-60  rounded-3xl flex items-center justify-center">
      <form>
        <input disabled={editDisabled} value={title} onChange={changeTitle} />

        <input disabled={editDisabled} value={income} onChange={changeIncome} />

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
      {editDisabled ? <button onClick={toggleEdit}>Edit Income</button> : null}
      {editDisabled ? null : (
        <button onClick={deleteIncome}>Delete Income</button>
      )}
      {editDisabled ? null : (
        <button onClick={submitIncome}>Submit Income</button>
      )}
    </div>
  );
}

export default IncomeCard;
