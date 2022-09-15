import { useState, useEffect } from "react";
import axios from "axios";

import IncomeCard from "../Components/IncomeCard";
import AddIncome from "../Components/AddIncome";

const API_URL = "http://localhost:5005";

function IncomeListPage() {
  const [income, setIncome] = useState([]);

  const getIncome = () => {
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/api/income`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setIncome(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getIncome();
  }, []);

  return (
    <div>
      <AddIncome refreshIncome={getIncome} />
      {income.map((income) => {
        return (
          <IncomeCard setAllIncome={setIncome}
            key={income._id}
            incomeId={income._id}
            incomeTitle={income.title}
            incomeValue={income.income}
            incomeCategory={income.category}
          />
        );
      })}
    </div>
  );
}

export default IncomeListPage;
