import React from "react";
import styles from "./CurrencyInput.module.css";

export interface CurrencyInputProps {
  userInput: string;
  onUserInputChange: (input: string) => void;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  userInput,
  onUserInputChange,
}) => {
  return (
    <input
      className={styles.currencyInput}
      type="text"
      value={userInput}
      onChange={(event) => onUserInputChange(event.target.value)}
    />
  );
};

export default CurrencyInput;
