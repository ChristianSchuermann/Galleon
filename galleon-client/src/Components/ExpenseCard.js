import expenseIcon from "../Images/icons8-shopping-50.png";

function ExpenseCard({ title, expense, description }) {
  return (
    <div className="">
    <div className="box-border h-36 w-60  rounded-3xl flex items-center justify-center bg-[#FD3C4A] h-200">
      <img className="pr-5"src={expenseIcon}  alt="Expense Icon"/>
      <div>
      <h3 className="md:text-xl lg:text-2xl text-white">{title}</h3>
      <h4 className="md:text-xl lg:text-2xl text-white">Amount:</h4>
      <p className="md:text-xl lg:text-2xl text-white">{expense}</p>
      <h4 className="md:text-lg lg:text-xl text-white">Description:</h4>
      <p className="md:text-lg lg:text-xl text-white">{description}</p>
      </div>
    </div>
      <button className="bg-[#FD3C4A] text-[#FFFFFF] font-[Poppins] py-2 px-4 rounded  hover:bg-red-400 duration-500 mt-5 mr-5">Edit Expense</button>
      <button className="bg-[#FD3C4A] text-[#FFFFFF] font-[Poppins] py-2 px-4 rounded  hover:bg-red-400
    duration-500">Delete Expense</button>
    </div>
  );
}

export default ExpenseCard;
