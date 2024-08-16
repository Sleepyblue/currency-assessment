import React from "react";
import Icon from "../Icon/Icon";
import useDebounce from "../../hooks/useDebounce";
import { DataItem } from "../../types/types";
import styles from "./ConversionList.module.css";

export interface ConversionListProps {
  userInput: string;
  data: (DataItem | null)[] | undefined;
}

const ConversionList: React.FC<ConversionListProps> = ({ userInput, data }) => {
  const debouncedUserInput = useDebounce(Number(userInput), 500);

  if (!debouncedUserInput) {
    return <p>Enter an amount to check the rates</p>;
  }

  return (
    <ul className={styles.conversionList}>
      {data?.map((item, index) => {
        if (item) {
          return (
            <li key={`${item.currency}-${index}`}>
              <p>{debouncedUserInput * item.ask}</p>
              <div className="">
                <Icon
                  currency={item.currency}
                  size="1rem"
                  className={styles.icon}
                />
                <p>{item.currency}</p>
              </div>
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};

export default ConversionList;
