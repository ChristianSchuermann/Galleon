function IncomeCard({ title, income, description }) {
    return (
      <div className="container ">
        <h3>{title}</h3>
        <h4>Amount:</h4>
        <p>{income}</p>
        <h4>Description:</h4>
        <p>{description}</p>
        <button>Edit Expense</button>
        <button>Delete Expense</button>
      </div>
    );
  }
  
  export default IncomeCard;