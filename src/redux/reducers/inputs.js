/* eslint-disable import/no-anonymous-default-export */
import actionTypes from "../actionTypes";

const initialState = {
  id: -1,
  title: "",
  description: "",
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INPUT_ID: {
      const { id } = action;
      return {
        ...state,
        id,
      }
    }
    case actionTypes.SET_INPUT_TITLE: {
      const { title } = action;
      return {
        ...state,
        title,
      }
    }
    case actionTypes.SET_INPUT_DESCRIPTION: {
      const { description } = action;
      return {
        ...state,
        description,
      }
    }
    case actionTypes.RESET_INPUT: {
      return initialState
    }
    default:
      return state;
  }
}