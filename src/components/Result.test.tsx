import { render, screen } from "@testing-library/react";
import Result from "./Result";

interface itemProps {
  [key: string]: string;
}

describe("Result", () => {
  const item: itemProps = {
    1: "A-S",
    2: "2-H",
    3: "3-D",
  };

  beforeEach(() => {
    render(<Result item={item} />);
  });

  it("renders the correct subheader", () => {
    // Find the subheader element by its text
    const subheaderElement = screen.getByText("Result : 3 Players");
    // Check that the subheader element is in the document
    expect(subheaderElement).toBeInTheDocument();
  });

  it("renders the correct number of list items", () => {
    // Find all list item elements
    const listItemElements = screen.getAllByRole("listitem");
    // Check that the number of list item elements is the same as the number of players
    expect(listItemElements.length).toBe(Object.keys(item).length + 1);
  });

  it("renders the correct primary and secondary text for each list item", () => {
    // Loop over each player
    Object.keys(item).forEach((key) => {
      // Find the primary text element by its text
      const primaryTextElement = screen.getByText(`Players ${key}`);
      // Find the secondary text element by its text
      const secondaryTextElement = screen.getByText(item[key]);
      // Check that both the primary and secondary text elements are in the document
      expect(primaryTextElement).toBeInTheDocument();
      expect(secondaryTextElement).toBeInTheDocument();
    });
  });

  it("renders the correct default height", () => {
    // Find the list element by its role
    const listElement = screen.getByRole("list");
    // Check that the list element has the correct default height
    expect(listElement).toHaveStyle("max-height: 400px");
  });

  it("renders the correct height if height is provided", () => {
    // Rerender the component with a different height
    const { rerender } = render(<Result item={item} />);
    rerender(<Result item={item} defaultHeight={500} />);
    // Find the list element by its role
    const listElement = screen.getAllByRole("list")[1];
    // Check that the list element has the correct height
    expect(listElement).toHaveStyle("max-height: 500px");
  });
});
