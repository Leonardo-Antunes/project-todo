import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TextField, Button
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";


import inputActions from "../../redux/actions/inputActions";
import todoActions from "../../redux/actions/todoActions";

export default function FormTodo() {
  const dispatch = useDispatch();

  const id = useSelector(state => state.inputs.id)
  const title = useSelector(state => state.inputs.title);
  const description = useSelector(state => state.inputs.description);
  const tag = useSelector(state => state.inputs.tag);
  const isChecked = useSelector(state => state.inputs.isChecked);

  const itens = useSelector(state => state.todos.todos)
  console.log(itens)

  const tags =
    [
      {
        tagName: "todo",
        tagColor: "#fff"
      },
      {
        tagName: "lazer",
        tagColor: "#fff"
      },
      {
        tagName: "trabalho",
        tagColor: "#fff"
      },
    ]

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
          isChecked,
        })
      );
      dispatch(inputActions.resetInput());
    }
  };

  const updateItem = () => {
    if (title && description && tag) {
      dispatch(todoActions.updateItem(id, {
        title, description, tag
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
        id="description"
        label="Description"
        placeholder="Describe your todo here"
        multiline
        value={id !== -1 ? description : description}
        onChange={handleDescriptionChange}
        variant="outlined"
        size="small"
      />
      <Autocomplete
        id="tag"
        //limpar campo
        selectOnFocus
        options={tags}
        getOptionLabel={(option) => option.tagName}
        getOptionSelected={(option, value) => option.tagName === value.tagName}
        renderInput={(params) => (<TextField {...params} label="Tag" variant="outlined" margin="normal" />)}
        size="small"
        onChange={handleTagChange}
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
