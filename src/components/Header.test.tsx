import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("renders the title", () => {
    // find an element with the text "Card Distribution"
    const titleElement = screen.getByText("Card Distribution");
    // make sure that element is in the document
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the default title if no title is provided", () => {
    // render the component without a title
    const { rerender } = render(<Header />);
    // render the component with a title
    rerender(<Header title="Card Distribution Demo" />);
    // find an element with the text "Card Distribution Demo"
    const titleElement = screen.getByText("Card Distribution Demo");
    // make sure that element is in the document
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the description", () => {
    // render the component without a description
    const { rerender } = render(<Header />);
    // render the component with a description
    rerender(<Header description="My Description" />);
    // find an element with the text "My Description"
    const descriptionElement = screen.getByText("My Description");
    // make sure that element is in the document
    expect(descriptionElement).toBeInTheDocument();
  });

  it("renders the default description if no description is provided", () => {
    // find an element with the text "Enter Number Of Players To Distribute Cards"
    const descriptionElement = screen.getByText(
      "Enter Number Of Players To Distribute Cards"
    );
    // make sure that element is in the document
    expect(descriptionElement).toBeInTheDocument();
  });

  it("renders the description with the correct class", () => {
    // render the component without a description
    const { rerender } = render(<Header />);
    // render the component with a description
    rerender(<Header description="My Description" />);
    // find an element with the text "My Description"
    const descriptionElement = screen.getByText("My Description");
    // make sure that element has the class "description"
    expect(descriptionElement.classList.contains("description")).toBe(true);
  });
});
