import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItems";
const Expense = ({ expenses }) => {
  console.log(expenses);
  
  return (
    <Card className="p-4 rounded-lg mx-20 m-2 bg-slate-600">
      {expenses.map((expense,i) => (
        <ExpenseItem key={i} expense={expense} />
      ))}
    </Card>
  );
};

export default Expense;
