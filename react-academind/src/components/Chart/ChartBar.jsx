import styles from "./ChartBar.module.css";

function ChartBar(props) {
  let barFilledHeight = "0%";

  if (props.maxValue > 0) {
    barFilledHeight = Math.round((props.value / props.max) * 100) + "%";
  }

  return (
    <div className={styles.chartBar}>
      <div className={styles.chartBar__inner}>
        <div
          className={styles.chartBar__fill}
          style={{ height: barFilledHeight }}
        ></div>
      </div>
      <div className={styles.chartBar__label}>{props.label}</div>
    </div>
  );
}

export default ChartBar;
