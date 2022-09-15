import ProgressBar from "./ProgressBar";


function Wallet({incomes, expenses}) {

const API_URL = "https://wandering-neckerchief-lion.cyclic.app"

  let expenseTotal = 0;
  let incomeTotal = 0;

  incomes.forEach((_income) => {
    incomeTotal += _income.income;
  });

  expenses.forEach((_expense) => {
   expenseTotal += _expense.expense;
  });

  function getPercentage(incomeTotal, expenseTotal) {

    let persentage =  ((expenseTotal *100) / incomeTotal).toFixed(2)
    console.log (persentage)
    return persentage
   } 


  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="circle mb-10 py-10 ">
          <div className="flex flex-col justify-center items-center mt-8">
            <h1 className="text-white text-xl">
              Your total income: {incomeTotal}
            </h1>
            <h1 className="text-white text-xl">
              Your total expense: {expenseTotal}
            </h1>
            <h1 className="text-white text-xl">
              Remaining: {incomeTotal - expenseTotal}
            </h1>
          </div>
        </div>

        <ProgressBar
          progressPercentage={getPercentage(incomeTotal, expenseTotal) + "%"}
        />
      </div>
    </>
  );
}

export default Wallet;
