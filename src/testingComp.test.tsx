import { render, screen } from "@testing-library/react";
import Testing from "./testingComp";

it('should renders "Testing"', () => {
  render(<Testing />);

  const element = screen.getByText("Testing");

  expect(element).toBeInTheDocument();
});
