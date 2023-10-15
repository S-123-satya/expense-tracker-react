import expens from "../../ExpenseModel/expenseModel";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItems";
import { useState } from "react";
const Expense=()=>{
    const [expense,setExpene] = useState([...expens]);
    console.log(expense);
    return (
        <Card className="p-4 rounded-lg mx-20 m-2 bg-slate-600">
            <ExpenseItem expense={expense[0]}/>
            <ExpenseItem expense={expense[1]}/>
            <ExpenseItem expense={expense[2]}/>
            <ExpenseItem expense={expense[3]}/>
        </Card>
    )
}

export default Expense;