
import ExpenseItem from "./ExpenseItems";
const Expense=()=>{
    const expense=[
        {
            title:"Movie Ticket",
            amount:300,
            date:new Date(),
            location:"Delhi"
        },
        {
            title:"Pizza",
            amount:150,
            date:new Date(),
            location:"Noida"
        },
        {
            title:"Shoes",
            amount:500,
            date:new Date(),
            location:"Gurgoun"
        },
        {
            title:"Clothes",
            amount:1000,
            date:new Date(),
            location:"Lucknow"
        },
    ]
    return (
        <div className="p-4 rounded-lg m-40 bg-slate-600">
            <ExpenseItem expense={expense[0]}/>
            <ExpenseItem expense={expense[1]}/>
            <ExpenseItem expense={expense[2]}/>
            <ExpenseItem expense={expense[3]}/>
        </div>
    )
}

export default Expense;