import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

import {
  TextField,
  Button
} from "@material-ui/core";


import inputActions from "../../redux/actions/inputActions";
import todoActions from "../../redux/actions/todoActions";




export default function FormTodo() {
  const dispatch = useDispatch();
  const filter = createFilterOptions();

  const id = useSelector(state => state.inputs.id)
  const title = useSelector(state => state.inputs.title);
  const description = useSelector(state => state.inputs.description);
  const tag = useSelector((state) => state.inputs.tag);

  const handleTitleChange = (e) => {
    dispatch(inputActions.setInputTitle(e.target.value));
  };
  const handleDescriptionChange = (e) => {
    dispatch(inputActions.setInputDescription(e.target.value));
    console.log(e.target.value)
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
          //tag,
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
      {/* <Autocomplete
        value={id === -1 ? "" : tag.tagName}
        defaultValue={id === -1 ? "" : tag.tagName}
        size="small"
        onChange={handleTagChange}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              tagName: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        id="tag"
        options={tag}
        getOptionLabel={(option) => {
          if (typeof option === 'string') {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.tagName;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(option) => option.tagName}
        style={{ width: 150 }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label="Tag" variant="outlined" />
        )}
      /> */}
      
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
