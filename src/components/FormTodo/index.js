import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Checkbox, FormControlLabel } from "@material-ui/core";

import { Form, FormBox, InputBox, InputText, SelectTag } from "./styled";
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
    labelInput = tagName;
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
      <FormBox>
        <InputBox>
          <InputText
            id="title"
            label="Title"
            multiline
            value={title}
            onChange={handleTitleChange}
            variant="outlined"
            size='small'

          />
          <InputText
            id="description"
            label="Description"
            placeholder="Describe your todo here"
            multiline
            value={description}
            onChange={handleDescriptionChange}
            variant="outlined"
            size='small'
          />

        </InputBox>
        <SelectTag
          id="tag"
          size='small'
          autoComplete
          clearOnBlur={true}
          handleHomeEndKeys
          inputValue={labelInput}
          selectOnFocus
          options={tags}
          getOptionLabel={(option) => option.tagName}
          getOptionSelected={(option, value) => option.tagName === value.tagName}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Tag"
              variant="outlined"
              margin="normal"
            />
          )}

          onChange={handleTagChange}
        />

      </FormBox>
      <FormBox>
        {id === -1 ? (
          <Button type="submit">Adicionar</Button>
        ) : (
          <>
            <FormControlLabel
              control={
                <Checkbox
                  type="checkbox"
                  value={isChecked}
                  checked={isChecked}
                  onChange={handleIsChecked}
                />
              }
              label="Completed"
            />
            <Button onClick={updateItem} type="button">
              Update
            </Button>
            <Button onClick={deleteItem} type="button">
              Delete
            </Button>
            <Button onClick={reset} type="button">
              Cancel
            </Button>
          </>
        )}
      </FormBox>
    </Form>
  );
}
