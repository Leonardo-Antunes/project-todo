import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TextField,
  ButtonBase,
} from "@material-ui/core";

import inputActions from "../../redux/actions/inputActions";
import todoActions from "../../redux/actions/todoActions";





export default function FormTodo() {
  const dispatch = useDispatch();

  const id = useSelector(state => state.inputs.id)
  const title = useSelector((state) => state.inputs.title);
  const description = useSelector((state) => state.inputs.description);
  // const tags = useSelector((state) => state.inputs.tag);

  const handleTitleChange = (e) => {
    dispatch(inputActions.setInputTitle(e.target.value));
  };
  const handleDescriptionChange = (e) => {
    dispatch(inputActions.setInputDescription(e.target.value));
  };

  const handleTagChange = (e) => {
    dispatch(inputActions.setItemTag(e.target.value));
  };

  const addItem = (e) => {
    e.preventDefault();
    if (title && description) {
      dispatch(
        todoActions.addItem({
          title,
          description,
          //tags,
        })
      );
      dispatch(inputActions.resetInput());
    }
  };

  return (
    <form onSubmit={addItem}>
      <TextField
        id="title"
        label="Title"
        multiline
        maxRows={4}
        value={id === -1 ? "" : title}
        onChange={handleTitleChange}
        variant="outlined"
        size="small"
      />
      <TextField
        id="outlined-textarea"
        label="Description"
        placeholder="Describe your todo here"
        multiline
        value={id === -1 ? "" : description}
        onChange={handleDescriptionChange}
        variant="outlined"
        size="small"
      />
      {/* <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Tag</InputLabel>
        <Select
          labelId="tagSelector"
          id="tagSelector"
          value={tags}
          onChange={handleTagChange}
          label="Tag"
          size="small"
        >
          {tags.map((tag, index) => (
            <MenuItem key={index} value={index}>
              {tag.tagName}
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}
      <ButtonBase type="submit">Adicionar tarefa</ButtonBase>
    </form>
  );
}
