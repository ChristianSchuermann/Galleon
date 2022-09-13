import { Link } from "react-router-dom";
import expenseIcon from "../Images/icons8-shopping-50.png";

// We are deconstructing props object directly in the parentheses of the function
function ExpenseCard({ title, description, expense, category, _id, User, firstName }) {
  console.log("data", { User, title, description, expense, category, _id })
  return (
    <div className="box-border py-10 w-60  rounded-3xl flex items-center justify-center bg-[#FD3C4A] ">
    <div>
      <img className="pr-5" src={expenseIcon}  alt="Expense Icon"/>
    </div>
    <div>
      <Link to={`/profile/expense/${_id}`}>
        <h3 className="text-xl lg:text-3xl text-white">{title}</h3>
      </Link>
      <p className="text-lg lg:text-xl text-white">{description}</p>
      <p className="text-lg lg:text-xl text-white">{expense}</p>
      <p className="text-lg lg:text-xl text-white">{category}</p>
    </div>
    </div>


  );
}

export default ExpenseCard;