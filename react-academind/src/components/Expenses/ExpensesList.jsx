import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.module.css";

function ExpensesList(props) {
  let expensesMsg = (
    <p className="text">No expenses found for the selected year.</p>
  );

  if (props.items.length > 0) {
    expensesMsg = props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));

    console.log(props.items);
  }
 return <ul className="expensesList">
    {expensesMsg}
  </ul>;
}

export default ExpensesList;
