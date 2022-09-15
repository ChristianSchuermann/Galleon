import { useState } from "react";
import axios from "axios";

import { Dropdown } from "react-dropdown-now";

const API_URL = "https://wandering-neckerchief-lion.cyclic.app";

function IncomeCard({
  incomeTitle,
  incomeValue,
  incomeCategory,
  incomeId,
  refresh,
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
        const updatedIncome = response.data;
        setTitle(updatedIncome.title);
        setCategory(updatedIncome.category);
        setIncome(updatedIncome.income);
        refresh();
      })
      .catch((error) => console.log(error));
  };

  const deleteIncomeChris = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${API_URL}/api/income/${incomeId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        refresh(response.data);
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

  const changeIncome = (e) => {
    e.preventDefault();
    setIncome(e.target.value);
  };

  const changeCategory = (e) => {
    setCategory(e.value);
  };

  return (
    <div className="w-52 m-5  border-2 border-green-400  ">
      <form className="flex flex-col pr-2 pl-2 my-2">
        <div className="flex">
          <input
            size="14"
            disabled={editDisabled}
            value={title}
            onChange={changeTitle}
          />

          <input
            maxLength="6"
            size="6"
            disabled={editDisabled}
            value={income}
            onChange={changeIncome}
          />
        </div>
        <Dropdown
          disabled={editDisabled}
          placeholder={category}
          options={["Salary", "Passive Income", "Inheritance", "Other"]}
          value={category}
          onChange={(value) => changeCategory(value)}
          onSelect={(value) => changeCategory(value)}
        />
      </form>

      {editDisabled ? (
        <button
          className="btn-green w-52 py-1  mt-2 text-white grid content-center font-bold "
          onClick={toggleEdit}
        >
          Edit Income
        </button>
      ) : null}
      <div className="flex">
        {editDisabled ? null : (
          <button className="btn-green" onClick={submitIncome}>
            Submit Income
          </button>
        )}
        {editDisabled ? null : (
          <button className="btn-red" onClick={deleteIncomeChris}>
            Delete Income
          </button>
        )}
      </div>
    </div>
  );
}

export default IncomeCard;
