import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://wandering-neckerchief-lion.cyclic.app" || "http://localhost:5005"

function EditExpensePage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [expense, setExpense] = useState(0);
  const [category, setCategory] = useState("");

  const { expenseID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/api/expense/${expenseID}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneExpense = response.data;
        setTitle(oneExpense.title);
        setDescription(oneExpense.description);
        setExpense(oneExpense.expense);
        setCategory(oneExpense.category);
      })
      .catch((error) => console.log(error));
  }, [expenseID]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description, expense, category };
    const storedToken = localStorage.getItem("authToken");

    axios
      .put(`${API_URL}/api/expense/${expenseID}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        props.refreshExpense();
        navigate(`/expense/${expenseID}`);
      });
  };

  const deleteExpenseChris = () => {
    console.log("Clicked");
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${API_URL}/api/expense/${expenseID}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneExpense = response.data;
        console.log(response.data);
        setTitle(oneExpense.title);
        setDescription(oneExpense.description);
        setExpense(oneExpense.expense);
        setCategory(oneExpense.category);
        navigate("/expense");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Edit the Expense</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Expense:</label>
        <textarea
          name="expense"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />

        <label>Category:</label>
        <textarea
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Update Expense</button>
      </form>

      <button onClick={deleteExpenseChris}>Delete Expense</button>
    </div>
  );
}

export default EditExpensePage;
