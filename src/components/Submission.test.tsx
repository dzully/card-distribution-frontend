import { fireEvent, render, screen } from "@testing-library/react";
import Submission from "./Submission";

console.error = jest.fn();

// Create a describe block to group tests together
describe("Submission", () => {
  // Create a variable for each function you want to mock
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  // Create a beforeEach block to run before each test
  beforeEach(() => {
    // Use the render function to render the component you want to test
    render(
      // Pass in the props you want to use to render the component
      <Submission
        buttonTitle="Submit"
        inputLabel="Number of players"
        inputValue={5}
        handleChange={handleChange}
        inputHelperText="Input value does not exist or value is invalid"
        inputError={false}
        handleSubmit={handleSubmit}
      />
    );
  });

  // Add tests to the describe block
  it("renders the input label", () => {
    // Use the screen object to query for elements on the page
    const inputLabelElement = screen.getByLabelText("Number of players");

    // Use an assertion to verify that the element exists
    expect(inputLabelElement).toBeInTheDocument();
  });

  // Add more tests to the describe block
  it("renders the input value", () => {
    const inputValueElement = screen.getByDisplayValue("5");
    expect(inputValueElement).toBeInTheDocument();
  });

  it("calls the handleChange function when the input value changes", () => {
    const inputElement = screen.getByTestId("textbox-input");
    fireEvent.change(inputElement, { target: { value: "6" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("renders the input helper text when there is an error", () => {
    // Use the render function again to render the component with different props
    render(
      <Submission
        buttonTitle="Submit"
        inputLabel="Number of players"
        inputValue={0}
        handleChange={handleChange}
        inputHelperText="Input value does not exist or value is invalid"
        inputError={true}
        handleSubmit={handleSubmit}
      />
    );

    // Use the screen object to query for the element you want to test
    const inputHelperTextElement = screen.getByText(
      "Input value does not exist or value is invalid"
    );

    // Use an assertion to verify that the element exists
    expect(inputHelperTextElement).toBeInTheDocument();
  });

  it("calls the handleSubmit function when the form is submitted", () => {
    const buttonElement = screen.getByRole("button", { name: "Submit" });
    fireEvent.click(buttonElement);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
