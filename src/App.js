import { useState } from "react";
import Expense from "./Components/Expense/Expense";
import ExpenseForm from "./Components/ExpenseForm/ExpenseForm";
import expense from "./ExpenseModel/expenseModel";

function App() {
  const [expenseData,setExpenseData] = useState(expense);
  function addExpenseHandler(value){
    setExpenseData((prevValues=>{
      return [value, ...prevValues]
    }));
    console.log(expenseData);
  }
  return (
    <div  className="bg-green-200">
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <Expense expenses={expenseData}/>
    </div>
  );
}

export default App;
