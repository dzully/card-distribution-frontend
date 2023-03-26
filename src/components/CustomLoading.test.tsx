import { render, screen } from "@testing-library/react";
import CustomLoading from "./CustomLoading";

describe("CustomLoading", () => {
  beforeEach(() => {
    render(<CustomLoading />);
  });

  it("should render the CustomLoading component", () => {
    expect(screen.getByTestId("loading-container")).toBeInTheDocument();
  });
});
