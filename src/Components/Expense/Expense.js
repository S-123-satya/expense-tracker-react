import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItems";
const Expense = ({ expenses }) => {
  console.log(expenses);
  const [filteredYear,setFilteredYear]= useState('2023');
  const filterChangeHandler= setectedYear=>{
    setFilteredYear(setectedYear);
  }
  return (
    <Card className="p-4 rounded-lg mx-20 m-2 bg-slate-600">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {expenses.map((expense, i) => (
        <ExpenseItem key={i} expense={expense} />
      ))}
    </Card>
  );
};

export default Expense;
