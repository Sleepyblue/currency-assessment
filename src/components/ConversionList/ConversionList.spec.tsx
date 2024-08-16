import React from "react";
import { render, screen } from "@testing-library/react";
import ConversionList from "./ConversionList";
import { DataItem } from "../../types/types";

describe("ConversionList", () => {
  it("renders a message when userInput is empty", () => {
    render(<ConversionList userInput="" data={undefined} />);
    expect(
      screen.getByText("Enter an amount to check the rates")
    ).toBeInTheDocument();
  });

  it("renders a list of conversions when userInput and data are provided", () => {
    const data: DataItem[] = [
      { currency: "USD", ask: 1.2 },
      { currency: "EUR", ask: 0.9 },
    ];
    render(<ConversionList userInput="100" data={data} />);
    expect(screen.getByText("120")).toBeInTheDocument();
    expect(screen.getByText("USD")).toBeInTheDocument();
    expect(screen.getByText("90")).toBeInTheDocument();
    expect(screen.getByText("EUR")).toBeInTheDocument();
  });

  it("does not render a list item when the data item is null", () => {
    const data: (DataItem | null)[] = [{ currency: "USD", ask: 1.2 }, null];
    render(<ConversionList userInput="100" data={data} />);
    expect(screen.getByText("120")).toBeInTheDocument();
    expect(screen.getByText("USD")).toBeInTheDocument();
    expect(screen.queryByText("EUR")).not.toBeInTheDocument();
  });
});
