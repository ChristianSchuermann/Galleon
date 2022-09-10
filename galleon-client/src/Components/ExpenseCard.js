// We are deconstructing the props object directly in the parentheses of the function
function ExpenseCard({ title, expense, description }) {
  return (
    <div className="container ">
      <h3>{title}</h3>
      <h4>Amount:</h4>
      <p>{expense}</p>
      <h4>Description:</h4>
      <p>{description}</p>
      <button>Edit Expense</button>
      <button>Delete Expense</button>
    </div>
  );
}

export default ExpenseCard;
