import actionTypes from "../actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  setInputTitle: (title) => ({
    type: actionTypes.SET_INPUT_TITLE,
    title,
  }),
  setInputDescription: (description) => ({
    type: actionTypes.SET_INPUT_DESCRIPTION,
    description,
  }),
  setInputId: (id) => ({
    type: actionTypes.SET_INPUT_ID,
    id,
  }),
  setIsChecked: (isChecked) => ({
    type: actionTypes.SET_TODO_CHECKED,
    isChecked,
  }),
  resetInput: () => ({
    type: actionTypes.RESET_INPUT,
  }),
}