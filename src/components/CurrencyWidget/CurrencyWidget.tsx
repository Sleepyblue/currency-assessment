import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { useTicker } from "../../queries/useTicker";
import ConversionList from "../ConversionList/ConversionList";
import { CurrenciesEnum } from "../../types/types";
import CurrencyInput from "../CurrencyInput/CurrencyInput";
import styles from "./CurrencyWidget.module.css";

function CurrencyWidget() {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrenciesEnum>(
    CurrenciesEnum.USD
  );
  const [userInput, setUserInput] = useState("0.00");
  const { data, isError, isLoading } = useTicker(selectedCurrency);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data.</p>;
  }

  return (
    <div className={styles.currencyWidget}>
      <h1>Currency Converter</h1>
      <p>
        Receive competitive and transparent pricing with no hidden spreads. See
        how we compare.
      </p>
      <div className={styles.inputContainer}>
        <CurrencyInput userInput={userInput} onUserInputChange={setUserInput} />
        <Dropdown
          selectedCurrency={selectedCurrency}
          onCurrencyChange={setSelectedCurrency}
        />
      </div>
      <ConversionList userInput={userInput} data={data} />
    </div>
  );
}

export default CurrencyWidget;
