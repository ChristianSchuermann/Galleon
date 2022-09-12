import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function ExpenseCard({ title, description, expense, category, _id }) {
  return (
    <div>
      <Link to={`/profile/expense/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{description} </p>
      <p>{expense}</p>
      <p>{category}</p>
    </div>
  );
}

export default ExpenseCard;
