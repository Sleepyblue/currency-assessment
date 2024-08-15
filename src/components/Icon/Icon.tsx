import React, { useState, useEffect } from "react";
import styles from "./Icon.module.css";

export interface IconProps {
  currency: string;
  className?: string;
  size?: string | number;
}

interface State {
  imageSrc?: string;
  bgColor: string;
}

const generateColor = (currency: string) => {
  const firstAlphabet = currency.charAt(0).toLowerCase();
  const asciiCode = firstAlphabet.charCodeAt(0);
  const colorNum =
    asciiCode.toString() + asciiCode.toString() + asciiCode.toString();
  const num = Math.round(0xffffff * parseInt(colorNum));
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgb(${r}, ${g}, ${b})`;
};

const loadImage = async (
  currency: string,
  isCurrent: boolean,
  setState: React.Dispatch<React.SetStateAction<State>>
) => {
  try {
    const image = await import(`../../assets/${currency}.png`);
    if (isCurrent) {
      setState((prevState: State) => ({
        ...prevState,
        imageSrc: image.default,
      }));
    }
  } catch (error) {
    if (isCurrent) {
      setState({ imageSrc: undefined, bgColor: generateColor(currency) });
    }
  }
};

const Icon: React.FC<IconProps> = ({
  className,
  currency,
  size = "1.25rem",
}) => {
  const [state, setState] = useState<{ imageSrc?: string; bgColor: string }>({
    imageSrc: undefined,
    bgColor: "",
  });

  useEffect(() => {
    let isCurrent = true;

    loadImage(currency, isCurrent, setState);

    return () => {
      isCurrent = false;
    };
  }, [currency]);

  return state.imageSrc ? (
    <img
      src={state.imageSrc}
      alt={currency}
      className={`${className} ${styles.currencyLogo}`}
      style={{ width: size }}
    />
  ) : (
    <span
      className={`${className} ${styles.noIcon}`}
      style={{ backgroundColor: state.bgColor, width: size }}
    >
      <p>{currency}</p>
    </span>
  );
};

export default Icon;
