import { render, fireEvent, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dropdown from "./Dropdown";
import { CurrenciesEnum } from "../../types/types";

const queryClient = new QueryClient();

describe("Dropdown", () => {
  const mockOnCurrencyChange = jest.fn();

  it("renders the component", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Dropdown
          selectedCurrency={CurrenciesEnum.USD}
          onCurrencyChange={mockOnCurrencyChange}
        />
      </QueryClientProvider>
    );
  });

  it("opens and closes when clicked", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Dropdown
          selectedCurrency={CurrenciesEnum.USD}
          onCurrencyChange={mockOnCurrencyChange}
        />
      </QueryClientProvider>
    );
    const dropdown = screen.getByRole("button");
    fireEvent.click(dropdown);
    expect(screen.getByRole("list")).toBeInTheDocument();
    fireEvent.click(dropdown);
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("displays the correct currency icon and name", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Dropdown
          selectedCurrency={CurrenciesEnum.USD}
          onCurrencyChange={mockOnCurrencyChange}
        />
      </QueryClientProvider>
    );
    expect(screen.getByText("USD")).toBeInTheDocument();
  });

  it("contains all the currencies in the dropdown list", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Dropdown
          selectedCurrency={CurrenciesEnum.USD}
          onCurrencyChange={mockOnCurrencyChange}
        />
      </QueryClientProvider>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getAllByRole("listitem")).toHaveLength(
      Object.keys(CurrenciesEnum).length
    );
  });
});
