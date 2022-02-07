import { render } from "@testing-library/react";
import CodeWrapper from "./components/code";

describe("QR Code main file should gather all related components", () => {
  const { container } = render(<CodeWrapper>Testing</CodeWrapper>);

  it("[container] should be in the document", () => {
    expect(container).toBeInTheDocument();
  });

  it("[container] should be rendered correctly", () => {
    expect(container).toMatchSnapshot();
  });
});
