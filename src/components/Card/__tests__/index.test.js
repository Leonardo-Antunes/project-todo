import React from "react";
import Card from "../index";
import { render } from "@testing-library/react";

test("render div with text", () => {
  const { getByText } = render(<Card />);
  const textElement = getByText(/first test/i);
  expect(textElement).toBeInTheDocument();
});
