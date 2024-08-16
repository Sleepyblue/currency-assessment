import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import Icon from "../Icon/Icon";
import DropdownIcon from "../../assets/dropdown-icon.svg";
import { CURRENCIES } from "../../util/constants";
import { CurrenciesEnum } from "../../types/types";

export interface DropdownProps {
  selectedCurrency: string;
  onCurrencyChange: (newCurrency: CurrenciesEnum) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  selectedCurrency,
  onCurrencyChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button className={styles.dropdown} onClick={() => setIsOpen(!isOpen)}>
      <div>
        <Icon className={styles.icon} currency={selectedCurrency} size="1rem" />
        {selectedCurrency}
        <img
          src={DropdownIcon}
          style={{ transform: isOpen ? "rotate(180deg)" : "" }}
          alt="dropdown icon"
        />
      </div>
      {isOpen && (
        <ul>
          {CURRENCIES.map((currency) => (
            <li key={currency} onClick={() => onCurrencyChange(currency)}>
              <Icon className={styles.icon} currency={currency} size="1rem" />
              {currency}
            </li>
          ))}
        </ul>
      )}
    </button>
  );
};

export default Dropdown;
