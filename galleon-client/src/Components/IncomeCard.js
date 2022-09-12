import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function IncomeCard({ title, description, income, category, _id }) {
  return (
    <div>
      <Link to={`/profile/income/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{description} </p>
      <p>{income}</p>
      <p>{category}</p>
    </div>
  );
}

export default IncomeCard;
