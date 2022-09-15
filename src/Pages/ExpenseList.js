import ExpenseCard from "../Components/ExpenseCard";
import AddExpense from "../Components/AddExpense";

function ExpenseListPage(props) {
  const list = props.expenses;

  return (
    <div>
      <AddExpense refresh={props.refresh} />
      {list.map((expense) => {
        return (
          <ExpenseCard

            refresh={props.refresh}

            setAllExpense={setExpense}

            key={expense._id}
            expenseId={expense._id}
            expenseTitle={expense.title}
            expenseValue={expense.expense}
            expenseCategory={expense.category}
          />
        );
      })}
    </div>
  );
}

export default ExpenseListPage;
