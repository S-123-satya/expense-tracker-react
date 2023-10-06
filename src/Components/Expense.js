import ExpenseDetails from "./ExpenseDetails";
import './../index.css'
const Expense=()=>{
    let date='12 jan 2023';
    let expenseItem='Movie tickets';
    let expenseAmount=100;
    let locationOfExpenditure="Delhi";
    return (
        <div className="p-4 rounded-lg m-40 bg-slate-600">
            <ExpenseDetails data={date} expenseAmount={expenseAmount} expenseItem={expenseItem} locationOfExpenditure={locationOfExpenditure}/>
            {/* <ExpenseDetails/>
            <ExpenseDetails/> */}
        </div>
    )
}

export default Expense;