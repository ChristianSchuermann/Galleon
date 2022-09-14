import { useState } from "react";
import axios from "axios";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";

const API_URL = "http://localhost:5005";

function AddExpense(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [expense, setExpense] = useState(0);
  const [category, SetCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, description, category, expense };

    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/expense`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setTitle("");
        setDescription("");
        setExpense(0);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-96 border-2">
      <h3>Add Expense</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Dropdown
          placeholder="Select a category"
          options={["Food", "Rent", "Car"]}
          value="one"
          onChange={(value) => SetCategory(value.value)}
          onSelect={(value) => SetCategory(value.value)} // always fires once a selection happens even if there is no change
          onClose={(closedBySelection) =>
            console.log("closedBySelection?:", closedBySelection)
          }
          onOpen={() => console.log("open!")}
        />

        <label>Amount:</label>
        <input
          type="number"
          name="amount"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />

        <button type="submit"> ʛ Submit</button>
      </form>
    </div>
  );
}

export default AddExpense;
