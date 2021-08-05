/* eslint-disable import/no-anonymous-default-export */
import actionTypes from "../actionTypes";

const initialState = {
  todos: [{
    id: 0,
    title: "lavar a louça",
    description: "pega",
  }],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM: {
      const todos = [...state.todos];
      todos.push(action.item);
      return {
        todos,
      }
    }
    case actionTypes.UPDATE_ITEM: {
      const { index, item } = action;
      const todos = [...state.todos];
      todos[index] = item;
      return {
        todos,
      }
    }
    case actionTypes.DELETE_ITEM: {
      const { index } = action;
      const todos = [];
      state.todos.forEach((item, i) => {
        if (index !== i) todos.push(item)
      })
      return {
        todos,
      }
    }

    default:
      return state
  }
}