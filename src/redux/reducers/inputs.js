/* eslint-disable import/no-anonymous-default-export */
import actionTypes from "../actionTypes";

const initialState = {
  id: -1,
  title: "",
  description: "",
  // tag: [
  //   {
  //     tagName: 'todo',
  //     tagColor: '#f3722c'
  //   },
  //   {
  //     tagName: 'lazer',
  //     tagColor: '#4d908e'
  //   },
  //   {
  //     tagName: 'livros',
  //     tagColor: '#f9844a'
  //   },

  // ]
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
    // case actionTypes.SET_ITEM_TAG: {
    //   const { tag } = action;
    //   return {
    //     ...state,
    //     tag,
    //   }
    // }
    case actionTypes.RESET_INPUT: {
      return initialState
    }
    default:
      return state;
  }
}