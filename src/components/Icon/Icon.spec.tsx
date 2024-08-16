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
    const span = await screen.findByTestId("icon-span");
    expect(span).toBeInTheDocument();
  });

  it("applies the className prop to the img element", async () => {
    render(<Icon currency="EUR" className="testClass" />);
    const img = await screen.findByAltText("EUR");
    expect(img).toHaveClass("testClass");
  });

  it("applies the size prop to the img element", async () => {
    render(<Icon currency="EUR" size="2rem" />);
    const img = await screen.findByAltText("EUR");
    expect(img).toHaveStyle({ width: "2rem" });
  });
});
