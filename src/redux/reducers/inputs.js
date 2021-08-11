/* eslint-disable import/no-anonymous-default-export */
import actionTypes from "../actionTypes";

export const initialState = {
  id: -1,
  title: "",
  description: "",
  tag: "",
  isChecked: false,
};

const todoSlice = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INPUT_ID: {
      const { id } = action;
      return {
        ...state,
        id,
      };
    }
    case actionTypes.SET_INPUT_TITLE: {
      const { title } = action;
      return {
        ...state,
        title,
      };
    }
    case actionTypes.SET_INPUT_DESCRIPTION: {
      const { description } = action;
      return {
        ...state,
        description,
      };
    }
    case actionTypes.SET_TODO_TAG: {
      const { tag } = action;
      return {
        ...state,
        tag,
      };
    }
    case actionTypes.SET_TODO_CHECKED: {
      let { isChecked } = action;
      return {
        ...state,
        isChecked,
      };
    }
    case actionTypes.RESET_INPUT: {
      return initialState;
    }
    default:
      return state;
  }
};

export default todoSlice;