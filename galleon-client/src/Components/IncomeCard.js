import { useState } from "react";
import axios from "axios";

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
  const [description, setDescription] = useState(incomeDescription);
  const [income, setIncome] = useState(incomeValue);
  const [category, setCategory] = useState(incomeCategory);

  const submitIncome = (e) => {
    e.preventDefault();
    setEditDisabled(true);

    const requestBody = { title, description, category, income };
    const storedToken = localStorage.getItem("authToken");
    axios
      .put(`${API_URL}/api/income/${incomeId}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // the api should return the updated object (income)
        const updatedIncome = response.data;
        setTitle(updatedIncome.title);
        setDescription(updatedIncome.description);
        setCategory(updatedIncome.category);
        setIncome(updatedIncome.income);
        console.log("response: ", response.status);
        console.log("updated income: ", response.data);
      })
      .catch((error) => console.log(error));
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

  const changeIncome = (e) => {
    e.preventDefault();
    setIncome(e.target.value);
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
        <input disabled={editDisabled} value={income} onChange={changeIncome} />
        <input
          disabled={editDisabled}
          value={category}
          onChange={changeCategory}
        />
      </form>
      {editDisabled ? <button onClick={toggleEdit}>Edit Income</button> : null}
      {editDisabled ? null : (
        <button onClick={submitIncome}>Submit Income</button>
      )}
    </div>
  );
}

export default IncomeCard;
