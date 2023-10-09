import Card from "../UI/Card";

const ExpenseForm = () => {
  return (
    <Card className=" bg-slate-700 text-white m-2 p-2">
      <form className="flex flex-col">
        <Card className="m-2 p-2 bg-slate-800 border border-cyan-200">
          <label>Expense amount</label>
          <input
            type="number"
            name="expenseAmt"
            placeholder="Please enter amount"
          ></input>
        </Card>
        <Card className="m-2 p-2 bg-slate-800 border border-cyan-200">
          <label>Expense Item</label>
          <input
            type="text"
            name="expenseItem"
            placeholder="Please enter item name"
          ></input>
        </Card>
        <Card className="m-2 p-2 bg-slate-800 border border-cyan-200">
          <label>Expense date</label>
          <input
            type="date"
            name="expenseDate"
            placeholder="Please enter date of expense"
          ></input>
        </Card>
        <Card className="m-2 p-2 bg-slate-800 border border-cyan-200">
          <button type="submit">Save</button>
        </Card>
      </form>
    </Card>
  );
};

export default ExpenseForm;
