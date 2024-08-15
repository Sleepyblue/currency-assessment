import { render, screen } from "@testing-library/react";
import Icon from "./Icon";

jest.mock("../../assets/USD.png", () => ({
  default: "USD.png",
}));

jest.mock("../../assets/EUR.png", () => new Error("Cannot find module"));

describe("Icon", () => {
  it("renders img when image can be imported", async () => {
    render(<Icon currency="USD" />);
    const img = await screen.findByRole("img");
    expect(img).toBeInTheDocument();
  });

  it("renders span when image cannot be imported", async () => {
    render(<Icon currency="EUR" />);
    const span = await screen.findByText("EUR");
    expect(span).toBeInTheDocument();
  });
});
