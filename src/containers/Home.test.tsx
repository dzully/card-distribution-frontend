import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("should render the Home component", () => {
    expect(screen.getByTestId("home-container")).toBeInTheDocument();
  });

  it("should render the Header component", () => {
    expect(screen.getByTestId("header-container")).toBeInTheDocument();
  });

  it("should render the Submission component", () => {
    expect(screen.getByTestId("submission-container")).toBeInTheDocument();
  });
});
