import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { SecaoDeTarefas, FormTodo } from "./components";
import { BgTheme } from "./GlobalTheme";

export default function App() {
  return (
    <ThemeProvider theme={BgTheme}>
      <CssBaseline />
      <FormTodo />
      <SecaoDeTarefas />
    </ThemeProvider>
  );
}
