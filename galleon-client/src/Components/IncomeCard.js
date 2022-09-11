import incomeIcon from "../Images/income-icon-1.jpeg";

function IncomeCard({ title, income, description }) {
  return (
    <div className="">
    <div className="box-border h-36 w-60  rounded-3xl flex items-center justify-center bg-[#00A86B] h-200">
      <img className="pr-5"src={incomeIcon}  alt="Expense Icon"/>
      <div>
      <h3 className="md:text-xl lg:text-2xl text-white">{title}</h3>
      <h4 className="md:text-xl lg:text-2xl text-white">Amount:</h4>
      <p className="md:text-xl lg:text-2xl text-white">{income}</p>
      <h4 className="md:text-lg lg:text-xl text-white">Description:</h4>
      <p className="md:text-lg lg:text-xl text-white">{description}</p>
      </div>
    </div>
      <button className="bg-[#00A86B] text-[#FFFFFF] font-[Poppins] py-2 px-4 rounded  hover:bg-green-400 duration-500 mt-5 mr-5">Edit Income</button>
      <button className="bg-[#00A86B] text-[#FFFFFF] font-[Poppins] py-2 px-4 rounded  hover:bg-green-400
    duration-500">Delete Income</button>
    </div>

  );
}

export default IncomeCard;
