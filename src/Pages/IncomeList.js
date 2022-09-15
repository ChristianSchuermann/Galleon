import IncomeCard from "../Components/IncomeCard";
import AddIncome from "../Components/AddIncome";

  return (
    <div>
      <AddIncome refresh={props.refresh} />
      {list.map((income) => {
        return (
          <IncomeCard

            refresh={props.refresh}

            setAllIncome={setIncome}

            key={income._id}
            incomeId={income._id}
            incomeTitle={income.title}
            incomeValue={income.income}
            incomeCategory={income.category}
          />
        );
      })}
    </div>
  );
}

export default IncomeListPage;
