import { useState } from "react";
import axios from "axios";
import { Dropdown } from "react-dropdown-now";


const API_URL = "http://localhost:5005";

function AddIncome(props) {
  const [title, setTitle] = useState("");
  const [income, setIncome] = useState(0);
  const [category, SetCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, category, income };

    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/income`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setTitle("");
        setIncome(0);
        props.refreshIncome();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-52 border-2 border-green-400 flex flex-col m-5">
      <h3 className="bg-[#00A86B] py-3 text-white font-bold flex justify-center">Add Income</h3>

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
          options={["Salary", "Passive Income", "Inheritance", "Other"]}
          value={category}
          onChange={(value) => SetCategory(value.value)}
          onSelect={(value) => SetCategory(value.value)} // always fires once a selection happens even if there is no change
          onClose={(closedBySelection) =>
            console.log("closedBySelection?:", closedBySelection)
          }
          onOpen={() => console.log("open!")}
        />
        <label className="text-lg">Amount:</label>
        <input
          type="number"
          name="amount"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />

         <button className="btn-green px-3 mb-2 mt-2 text-white  justify-center  py-3 font-bold text-lg"  type="submit"> ʛ Submit</button>
      </form>
     

    </div>
  );
}

export default AddIncome;
