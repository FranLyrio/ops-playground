import { render } from '@testing-library/react'

import { Heading } from '.';

describe("<Heading />", () => {
  it("renders the heading with the correct text", () => {
    const { getByText } = render(<Heading>Test Heading</Heading>);
    expect(getByText("Test Heading")).toBeInTheDocument();
  });

  it("applies the correct HTML tag", () => {
    const { container } = render(<Heading>Test Heading</Heading>);
    expect(container.querySelector("h1")).toBeInTheDocument();
  });
});