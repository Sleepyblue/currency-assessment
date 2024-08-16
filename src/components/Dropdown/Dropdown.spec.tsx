import { render, fireEvent, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";
import { CurrenciesEnum } from "../../types/types";

describe("Dropdown", () => {
  const mockOnCurrencyChange = jest.fn();

  it("renders the component", () => {
    render(
      <Dropdown
        selectedCurrency={CurrenciesEnum.USD}
        onCurrencyChange={mockOnCurrencyChange}
      />
    );
  });

  it("opens and closes when clicked", () => {
    render(
      <Dropdown
        selectedCurrency={CurrenciesEnum.USD}
        onCurrencyChange={mockOnCurrencyChange}
      />
    );
    const dropdown = screen.getByRole("button");
    fireEvent.click(dropdown);
    expect(screen.getByRole("list")).toBeInTheDocument();
    fireEvent.click(dropdown);
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("displays the correct currency icon and name", () => {
    render(
      <Dropdown
        selectedCurrency={CurrenciesEnum.USD}
        onCurrencyChange={mockOnCurrencyChange}
      />
    );
    expect(screen.getByText("USD")).toBeInTheDocument();
  });

  it("contains all the currencies in the dropdown list", () => {
    render(
      <Dropdown
        selectedCurrency={CurrenciesEnum.USD}
        onCurrencyChange={mockOnCurrencyChange}
      />
    );
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getAllByRole("listitem")).toHaveLength(
      Object.keys(CurrenciesEnum).length
    );
  });
});
