import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function EditIncomePage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [income, setIncome] = useState(0);
  const [category, setCategory] = useState("");

  const { incomeID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/api/income/${incomeID}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneIncome = response.data;
        setTitle(oneIncome.title);
        setDescription(oneIncome.description);
        setIncome(oneIncome.income);
        setCategory(oneIncome.category);
      })
      .catch((error) => console.log(error));
  }, [incomeID]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description, income, category };
    const storedToken = localStorage.getItem("authToken");

    axios
      .put(`${API_URL}/api/income/${incomeID}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        navigate(`/income/${incomeID}`);
      });
  };

  const deleteIncome = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${API_URL}/api/income/${incomeID}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate("/income");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Edit the Income</h3>

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

        <label>Income:</label>
        <textarea
          name="income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />

        <label>Category:</label>
        <textarea
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Update Income</button>
      </form>

      <button onClick={deleteIncome}>Delete Income</button>
    </div>
  );
}

export default EditIncomePage;
