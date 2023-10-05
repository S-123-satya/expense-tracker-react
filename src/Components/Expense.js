import ExpenseDetails from "./ExpenseDetails";
import './../index.css'
const Expense=()=>{
    return (
        <div className="p-4 rounded-lg m-40 bg-slate-600">
            <ExpenseDetails/>
            <ExpenseDetails/>
            <ExpenseDetails/>
        </div>
    )
}

export default Expense;