import styles from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className={styles.expenseItem}>
      <ExpenseDate date={props.date} />
      <div className={styles.expenseItem__description}>
        <h2>{props.title}</h2>
        <div className={styles.expenseItem__price}>$ {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
