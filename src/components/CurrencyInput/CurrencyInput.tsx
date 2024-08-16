import React, { useState } from "react";
import styles from "./CurrencyInput.module.css";

export interface CurrencyInputProps {
  userInput: string;
  onUserInputChange: (input: string) => void;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  userInput,
  onUserInputChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const displayValue = isFocused
    ? userInput
    : new Intl.NumberFormat(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 8,
      }).format(Number(userInput));

  return (
    <input
      className={styles.currencyInput}
      type="text"
      min="0.01"
      value={displayValue}
      onChange={(event) => onUserInputChange(event.target.value)}
      onBlur={handleBlur}
      onFocus={handleFocus}
      placeholder="0.00"
    />
  );
};

export default CurrencyInput;
