
const ExpenseDetails=(props)=>{
    console.log(props);
    return (
        <div className="flex justify-between border border-red-400 p-2">
            <div className=""> {props.title} </div>
            <div> {props.location} </div>
            <div> {props.amount} </div>
        </div>
    )
}

export default ExpenseDetails;