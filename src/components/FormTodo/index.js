import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TextField, Button
} from "@material-ui/core";


import inputActions from "../../redux/actions/inputActions";
import todoActions from "../../redux/actions/todoActions";


export default function FormTodo() {
  const dispatch = useDispatch();

  const id = useSelector(state => state.inputs.id)
  const title = useSelector(state => state.inputs.title);
  const description = useSelector(state => state.inputs.description);
  const isChecked = useSelector((state) => state.inputs.isChecked);

  const handleTitleChange = (e) => {
    dispatch(inputActions.setInputTitle(e.target.value));
  };

  const handleDescriptionChange = (e) => {
    dispatch(inputActions.setInputDescription(e.target.value));
  };

  const addItem = (e) => {
    e.preventDefault();
    if (title && description) {
      dispatch(
        todoActions.addItem({
          title,
          description,
          isChecked,
        })
      );
      dispatch(inputActions.resetInput());
    }
  };

  const updateItem = () => {
    if (title && description) {
      dispatch(todoActions.updateItem(id, {
        title, description
      }))
      dispatch(inputActions.resetInput())
    }
  }

  const deleteItem = () => {
    dispatch(todoActions.deleteItem(id))
    dispatch(inputActions.resetInput())
  }

  return (
    <form onSubmit={addItem}>
      <TextField
        id="title"
        label="Title"
        multiline
        maxRows={4}
        value={id !== -1 ? title : title}
        onChange={handleTitleChange}
        variant="outlined"
        size="small"
      />
      <TextField
        id="outlined-textarea"
        label="Description"
        placeholder="Describe your todo here"
        multiline
        value={id !== -1 ? description : description}
        onChange={handleDescriptionChange}
        variant="outlined"
        size="small"
      />

      {id === -1 ?
        (<Button type="submit">Adicionar</Button>)
        :
        (<>
          <Button onClick={updateItem} type="button">Update</Button>
          <Button onClick={deleteItem} type="button">Delete</Button>
        </>)
      }
    </form>

  );
}
