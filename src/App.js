import Expense from "./Components/Expense/Expense";
import ExpenseForm from "./Components/ExpenseForm/ExpenseForm";
import { addExpense } from "./ExpenseModel/expenseModel";

function App() {
  function addExpenseHandler(value){
    console.log(value);
    addExpense(value);
  }
  return (
    <div  className="bg-green-200">
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <Expense/>
    </div>
  );
}

export default App;
