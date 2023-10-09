import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = ({ expense }) => {
  console.log(expense);
  return (
    <Card className="flex text-white">
      <ExpenseDate date={expense.date} />
      <ExpenseDetails
        amount={expense.amount}
        location={expense.location}
        title={expense.title}
      />
    </Card>
  );
};

export default ExpenseItem;
