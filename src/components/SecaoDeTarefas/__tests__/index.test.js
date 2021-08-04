import React from "react";
import SecaoDeTarefas from "../index";
import { render } from "@testing-library/react";

test("render div with text", () => {
  const { getByText } = render(<SecaoDeTarefas />);
  const textElement = getByText(/first test/i);
  expect(textElement).toBeInTheDocument();
});
