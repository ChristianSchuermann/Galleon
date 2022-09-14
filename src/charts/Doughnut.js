import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
// eslint-disable-next-line
import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import axios from "axios";



//axios request
//fetch data
// -> console.log response


/* function ExpenseChart() {
  const [value, setValue] = useState([]);
  const [categorie, setCategorie] = useState([])

   const getValue = () => {
    const storedToken = localStorage.getItem("authToken");

axios
.get(`${API_URL}/api/expense`, {
  headers: { Authorization: `Bearer ${storedToken}` },
})
.then((response) => setValue(response.data))
console.log(response.data)
.catch((error) => console.log(error));
};

//2 Arrays ->

useEffect(() => {
getValue();
}, []); */

//userID = _id.

//route -> server data.find

/* {expense.map((expense) => {
        return (expenseValue
                expenseCategory) */





function DoughnutChart() {

    const [value, setValue] = useState([]);
    const [categorie, setCategorie] = useState([])
  
     const getValue = () => {
      const storedToken = localStorage.getItem("authToken");
  
  axios
  .fetch(`http://localhost:5005/api/expense`, {
    headers: { Authorization: `Bearer ${storedToken}` },
  })
  .then((response) => setValue(response.data))
/*   console.log(response) */
  .catch((error) => console.log(error));
  };
  
  useEffect(() => {
  getValue();
  }, []);


  const data = {
    labels: [
      //category
      "Rent",
      "Food",
      "Bills",
      "Shopping",
      "Transportation",
      "Entertainment",
      "other...",
    ],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3, 15],
        //expense
        backgroundColor: [
          "red",
          "blue",
          "yellow",
          "green",
          "purple",
          "orange",
          "pink",
        ],
      },
    ],
  };
  return (
    <div>
      <h1>Chart</h1>

      <div style={{ width: "750px" }}>
        <Doughnut data={data} />
      </div>
    </div>
  );
}

export default DoughnutChart;
