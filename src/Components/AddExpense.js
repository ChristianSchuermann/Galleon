import { useState } from "react";
import axios from "axios";
import { Dropdown } from "react-dropdown-now";

const API_URL = "http://localhost:5005";

function AddExpense(props) {
  const [title, setTitle] = useState("");
  const [expense, setExpense] = useState(0);
  const [category, SetCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, category, expense };
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/expense`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setTitle("");
        setExpense(0);
        props.refresh();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-52 border-2 border-red-400  flex flex-col m-5">
      <h3 className="bg-[#FD3C4A] py-3 text-white font-bold flex justify-center ">
        Add Expense
      </h3>

      <form className="flex flex-col pr-2 pl-2" onSubmit={handleSubmit}>
        <label className="text-lg">Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Dropdown
          placeholder="Select a category"
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
          onChange={(value) => SetCategory(value.value)}
          onSelect={(value) => SetCategory(value.value)}
          onClose={(closedBySelection) =>
            console.log("closedBySelection?:", closedBySelection)
          }
          onOpen={() => console.log("open!")}
        />

        <label className="text-lg">Amount:</label>
        <input
          type="number"
          name="amount"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />

        <button
          className="btn-red px-3 mb-2 mt-2 text-white  justify-center  bg-[#FD3C4A] py-3 font-bold text-lg"
          type="submit"
        >
          {" "}
          ʛ Submit
        </button>
      </form>
    </div>
  );
}

export default AddExpense;
