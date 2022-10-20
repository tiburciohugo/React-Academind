import styles from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className={styles.expenseItem}>
      <ExpenseDate date={props.date} />
      <h2 className={styles.expenseItem__description}>{props.title}</h2>
      <div className={styles.expenseItem__price}>$ {props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
