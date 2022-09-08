import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddExpense(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [expense, setExpense] = useState(0)
  const [user, setUser] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, description, expense, user };
    
    const storedToken = localStorage.getItem('authToken');
 
    axios
      .post(
      `${API_URL}/api/expense`,
      requestBody,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
      .then((response) => {
      setTitle("");
      setDescription("");
      setExpense(0);
      setUser("")
    })
      .catch((error) => console.log(error));
  };


  return (
    <div>
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

        <label>Amount:</label>
        <input
          type="number"
          name="amount"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddExpense;