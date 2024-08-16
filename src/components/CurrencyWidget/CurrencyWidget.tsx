import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { useTicker } from "../../queries/useTicker";
import ConversionList from "../ConversionList/ConversionList";
import { CurrenciesEnum } from "../../types/types";
import CurrencyInput from "../CurrencyInput/CurrencyInput";
import styles from "./CurrencyWidget.module.css";
import Spinner from "../Spinner/Spinner";

function CurrencyWidget() {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrenciesEnum>(
    CurrenciesEnum.USD
  );
  const [userInput, setUserInput] = useState("");
  const { data, isError, isLoading } = useTicker(selectedCurrency);

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
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <p>
          🔒 Oops, we’re having trouble fetching the latest exchange rates.
          Please try again in a moment!
        </p>
      ) : (
        <ConversionList userInput={userInput} data={data} />
      )}
    </div>
  );
}

export default CurrencyWidget;
