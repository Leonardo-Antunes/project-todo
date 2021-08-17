import React from "react";
import { SecaoDeTarefas, FormTodo } from "./components";
import { CssBaseline } from "@material-ui/core";

export default function App() {
  return (
    <>
      <CssBaseline />
      <FormTodo />
      <SecaoDeTarefas />
    </>
  );
}
