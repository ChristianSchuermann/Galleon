import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
// eslint-disable-next-line
import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import axios from "axios";

const API_URL = "https://wandering-neckerchief-lion.cyclic.app";
const defaultData = [];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const renderLabel = (entry) => {
  return `${entry.name} (${entry.value})`
}

function DoughnutChart(props) {
  const { expenses } = props;
  const [doughnutData, setDoughnutData] = useState(defaultData);

  const expensesToDoughnutData = (expenses) => {
    const categories = [...new Set(expenses.map((e) => e.category))];
    const data = [];
    for (const category of categories) {
      const allExpensesForCategory = expenses
        .filter((e) => e.category === category)
        .map((e) => e.expense);
      const sumExpensesForCategory = allExpensesForCategory.reduce(
        (a, b) => a + b,
        0
      );
      data.push({ name: category, value: sumExpensesForCategory });
    }
    return data;
  };

  useEffect(() => {
    const data = expensesToDoughnutData(expenses);
    console.log(data);
    setDoughnutData(data);
  }, [expenses]);

  return (
    <div className="my-10">
      <div style={{ width: "450px" }}>
        <PieChart width={1200} height={600}>
          <Pie
            label={renderLabel}
            data={doughnutData}
            cx={220}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            nameKey="name"
          >
            {doughnutData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
}

export default DoughnutChart;
