import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Checkbox, FormControlLabel } from "@material-ui/core";

import {
  ButtonForm,
  Form,
  FormBox,
  FormBoxBotao,
  InputBox,
  InputText,
  SelectTag,
  Title,
} from "./styled";
import inputActions from "../../redux/actions/inputActions";
import todoActions from "../../redux/actions/todoActions";

export default function FormTodo() {
  const dispatch = useDispatch();

  const index = useSelector((state) => state.todos.index);
  const id = useSelector((state) => state.inputs.id);
  const title = useSelector((state) => state.inputs.title);
  const description = useSelector((state) => state.inputs.description);
  const tag = useSelector((state) => state.inputs.tag);
  const tagName = useSelector((state) => state.inputs.tag.tagName);
  const isChecked = useSelector((state) => state.inputs.isChecked);

  let labelInput = "";
  if (tagName === undefined) {
    labelInput = "";
  } else {
    labelInput = tag.tagName;
  }

  const tags = [
    {
      tagName: "todo",
      tagColor: "#e76f51",
    },
    {
      tagName: "lazer",
      tagColor: "#264653",
    },
    {
      tagName: "trabalho",
      tagColor: "#fb8500",
    },
  ];

  const handleIsChecked = () => {
    dispatch(inputActions.setIsChecked(!isChecked));
  };

  const handleTitleChange = (e) => {
    dispatch(inputActions.setInputTitle(e.target.value));
  };

  const handleDescriptionChange = (e) => {
    dispatch(inputActions.setInputDescription(e.target.value));
  };

  const handleTagChange = (e, value) => {
    dispatch(inputActions.setTag(value));
  };

  const addItem = (e) => {
    e.preventDefault();
    if (title && description && tag) {
      dispatch(
        todoActions.addItem({
          id: Date.now(),
          title,
          description,
          tag,
          isChecked: false,
        })
      );
      dispatch(inputActions.resetInput());
    }
  };

  const reset = () => {
    dispatch(inputActions.resetInput());
  };

  const updateItem = () => {
    if (title && description && tag) {
      dispatch(
        todoActions.updateItem(index, {
          id,
          title,
          description,
          tag,
          isChecked,
        })
      );
      dispatch(inputActions.resetInput());
    }
  };

  const deleteItem = () => {
    dispatch(todoActions.deleteItem(index));
    dispatch(inputActions.resetInput());
  };

  return (
    <Form onSubmit={addItem}>
      <Title variant="h4"> To-do </Title>
      <FormBox>
        <InputBox>
          <InputText
            id="title"
            label="Titulo"
            multiline
            value={title}
            onChange={handleTitleChange}
            variant="outlined"
            size="small"
          />
          <InputText
            id="description"
            label="Descrição"
            placeholder="Describe your todo here"
            multiline
            value={description}
            onChange={handleDescriptionChange}
            variant="outlined"
            size="small"
          />
        </InputBox>
        <SelectTag
          id="tag"
          autoComplete
          clearOnBlur={true}
          disableClearable
          handleHomeEndKeys
          inputValue={labelInput}
          selectOnFocus
          options={tags}
          getOptionLabel={(option) => option.tagName}
          getOptionSelected={(option, value) =>
            option.tagName === value.tagName
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Tag"
              variant="outlined"
              margin="normal"
            />
          )}
          size="small"
          onChange={handleTagChange}
        />
      </FormBox>
      <FormBoxBotao>
        {id === -1 ? (
          <ButtonForm bgcolor="#679436" type="submit">
            Adicionar
          </ButtonForm>
        ) : (
          <>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  type="checkbox"
                  value={isChecked}
                  checked={isChecked}
                  onChange={handleIsChecked}
                />
              }
              label="Concluir tarefa"
            />
            <ButtonForm bgcolor="#05668d" onClick={updateItem} type="button">
              Atualizar
            </ButtonForm>
            <ButtonForm bgcolor="#e5383b" onClick={deleteItem} type="button">
              Deletar
            </ButtonForm>
            <ButtonForm bgcolor="#faa307" onClick={reset} type="button">
              Cancelar
            </ButtonForm>
          </>
        )}
      </FormBoxBotao>
    </Form>
  );
}
