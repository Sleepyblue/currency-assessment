import { render, fireEvent, screen } from "@testing-library/react";
import CurrencyInput from "./CurrencyInput";

describe("CurrencyInput", () => {
  it("renders the input element", () => {
    render(<CurrencyInput userInput="" onUserInputChange={() => {}} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("displays the correct user input", () => {
    render(<CurrencyInput userInput="100" onUserInputChange={() => {}} />);
    expect((screen.getByRole("textbox") as HTMLInputElement).value).toBe("100");
  });

  it("calls the onUserInputChange callback with the correct input when the user types into the input field", () => {
    const mockOnUserInputChange = jest.fn();
    render(
      <CurrencyInput userInput="" onUserInputChange={mockOnUserInputChange} />
    );
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "200" } });
    expect(mockOnUserInputChange).toHaveBeenCalledWith("200");
  });
});
