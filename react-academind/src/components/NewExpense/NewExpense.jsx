import React from "react";
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

  return (
    <div className={styles.newExpense}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
