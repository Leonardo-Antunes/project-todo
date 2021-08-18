import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { SecaoDeTarefas, FormTodo } from "./components";
import { theme } from "./GlobalTheme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FormTodo />
      <SecaoDeTarefas />
    </ThemeProvider>
  );
}
