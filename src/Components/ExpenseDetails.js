const ExpenseDetails =(props)=>{
    console.log(props);
    return (
        <div className="m-2 p-3 bg-slate-800 text-white rounded-lg ">
            <span> {props.date} </span>
            <span> {props.expenseItem} </span>
            <span> {props.locationOfExpenditure} </span>
            <span> {props.expenseAmount} </span>
        </div>
    )
}

export default ExpenseDetails;