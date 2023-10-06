import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = ({expense}) => {
  console.log(expense);
  return (
    <div className="m-2 p-3 bg-slate-800 text-white rounded-lg flex">
      <ExpenseDate date={expense.date} />
      <ExpenseDetails
        amount={expense.amount}
        location={expense.location}
        title={expense.title}
      />
    </div>
  );
};

export default ExpenseItem;
