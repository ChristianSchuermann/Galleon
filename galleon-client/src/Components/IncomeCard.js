import { Link } from "react-router-dom";

import incomeIcon from "../Images/income-icon-1.jpeg";

// We are deconstructing props object directly in the parentheses of the function
function IncomeCard({ title, description, income, category, _id }) {
  return (
    <div className="box-border py-10 w-60  rounded-3xl flex items-center justify-center bg-[#00A86B] ">
    <div>
      <img className="pr-5" src={incomeIcon}  alt="Income Icon"/>
    </div>
    <div>
      <Link to={`/profile/income/${_id}`}>
        <h3 className="text-xl lg:text-3xl text-white">{title}</h3>
      </Link>
      <p className="text-lg lg:text-xl text-white">{description} </p>
      <p className="text-lg lg:text-xl text-white">{income}</p>
      <p className="text-lg lg:text-xl text-white">{category}</p>
    </div>
    </div>
  );
}

export default IncomeCard;
