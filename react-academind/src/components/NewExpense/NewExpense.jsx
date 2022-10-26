import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import styles from "./NewExpense.module.css";
import { v4 as uuidv4 } from "uuid";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidv4(),
    };
    props.onAddExpense(expenseData); // send data up to parent component
  };

  const onCancel = () => {
    setShowForm(!showForm);
  };

  const form = (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onCancel={onCancel}
    />
  );

  const changeHandler = () => {
    setShowForm(!showForm);
  };

  const addNewExpenseButton = (
    <button onClick={changeHandler} type="button">
      Add New Expense
    </button>
  );

  const [showForm, setShowForm] = useState(true);

  return (
    <div className={styles.newExpense}>
      {showForm ? addNewExpenseButton : form}
    </div>
  );
}

export default NewExpense;
