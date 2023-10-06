const ExpenseDate=(props)=>{
    console.log(props);
    const month = props.date.getMonth()+1;
const year = props.date.getFullYear();
const date = props.date. getDate();
    return (
        <div className="p-2 border border-cyan-200 w-32">
            <span>{date}</span>
            <span>{month}</span>
            <span>{year}</span>
        </div>
    )
}

export default ExpenseDate;