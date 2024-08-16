import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.spinnerWrapper}>
      <div className={styles.spinner} data-testid="spinner" />
    </div>
  );
};

export default Spinner;
