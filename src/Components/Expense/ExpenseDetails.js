
const ExpenseDetails=(props)=>{
    console.log(props);
    return (
        <div className="flex-grow flex justify-between border border-red-400 p-2">
            <div className=""> {props.title} </div>
            <div className=""> {props.location} </div>
            <div className=""> {props.amount} </div>
        </div>
    )
}

export default ExpenseDetails;