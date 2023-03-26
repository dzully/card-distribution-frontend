import { render, screen } from "@testing-library/react";
import CustomLoading from "./CustomLoading";

describe("CustomLoading", () => {
  // Render the CustomLoading component
  beforeEach(() => {
    render(<CustomLoading />);
  });

  // Check that the component renders
  it("should render the CustomLoading component", () => {
    expect(screen.getByTestId("loading-container")).toBeInTheDocument();
  });
});
