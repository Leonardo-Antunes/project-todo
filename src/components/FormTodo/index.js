import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Checkbox, FormControlLabel } from "@material-ui/core";

import {
  ButtonForm,
  Form,
  FormBox,
  FormBoxBotao,
  InputText,
  SelectTag,
  Title,
} from "./styled";
import { theme } from "../../GlobalTheme";
import inputActions from "../../redux/actions/inputActions";
import todoActions from "../../redux/actions/todoActions";

export default function FormTodo() {
  const dispatch = useDispatch();

  const index = useSelector((state) => state.todos.index);
  const id = useSelector((state) => state.inputs.id);
  const title = useSelector((state) => state.inputs.title);
  const description = useSelector((state) => state.inputs.description);
  const tag = useSelector((state) => state.inputs.tag);
  const isChecked = useSelector((state) => state.inputs.isChecked);

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
        <InputText
          id="title"
          label="Título"
          multiline
          value={title}
          onChange={handleTitleChange}
          variant="outlined"
          size="small"
          required
        />
        <InputText
          id="description"
          label="Descrição"
          value={description}
          onChange={handleDescriptionChange}
          variant="outlined"
          size="small"
          required
        />
        <SelectTag
          id="tag"
          size="small"
          required
          freeSolo
          clearOnBlur={true}
          disableClearable
          handleHomeEndKeys
          value={tag ? tag : { tagName: '', tagColor: '' }}
          onChange={handleTagChange}
          selectOnFocus={true}
          options={tags}
          getOptionLabel={(option) => option.tagName}
          getOptionSelected={(option, value) =>
            option.tagName === value.tagName
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Tag *"
              variant="outlined"
              margin="normal"
            />
          )}
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
            <ButtonForm bgcolor={theme.palette.primary.main} onClick={updateItem} type="button">
              Atualizar
            </ButtonForm>
            <ButtonForm bgcolor={theme.palette.error.main} onClick={deleteItem} type="button">
              Deletar
            </ButtonForm>
            <ButtonForm bgcolor={theme.palette.warning.main} onClick={reset} type="button">
              Cancelar
            </ButtonForm>
          </>
        )}
      </FormBoxBotao>
    </Form>
  );
}
