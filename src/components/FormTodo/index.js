import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TextField,
  Dialog,
  DialogContentText,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from "@material-ui/core";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";

import inputActions from "../../redux/actions/inputActions";
import todoActions from "../../redux/actions/todoActions";

const filter = createFilterOptions();

export default function FormTodo() {
  const dispatch = useDispatch();

  const title = useSelector((state) => state.inputs.title);
  const description = useSelector((state) => state.inputs.description);
  const isChecked = useSelector((state) => state.inputs.isChecked);
  // const tags = useSelector((state) => state.inputs.tag);

  const handleTitleChange = (e) => {
    dispatch(inputActions.setInputTitle(e.target.value));
  };

  const handleDescriptionChange = (e) => {
    dispatch(inputActions.setInputDescription(e.target.value));
  };

  const handleIsChecked = (e) => {
    dispatch(inputActions.setIsChecked(e.target.value));
  };

  // const handleTagChange = (e) => {
  //   dispatch(inputActions.setItemTag(e.target.value));
  // };

  const addItem = (e) => {
    e.preventDefault();
    if (title && description) {
      dispatch(
        todoActions.addItem({
          title,
          description,
          isChecked
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
        value={title}
        onChange={handleTitleChange}
        variant="outlined"
        size="small"
      />
      <TextField
        id="outlined-textarea"
        label="Description"
        placeholder="Describe your todo here"
        multiline
        value={description}
        onChange={handleDescriptionChange}
        variant="outlined"
        size="small"
      />
      <TextField
        id="outlined-textarea"
        label="IsChecked"
        placeholder="Já terminou a tarefa?"
        multiline
        value={isChecked}
        onChange={handleIsChecked}
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
      <button type="submit">Adicionar tarefa</button>
    </form>
  );
}
