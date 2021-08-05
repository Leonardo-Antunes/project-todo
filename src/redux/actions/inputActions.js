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
  resetInput: () => ({
    type: actionTypes.RESET_INPUT,
  }),
  // setItemTag: (tag) => ({
  //   type: actionTypes.SET_ITEM_TAG,
  //   tag,
  // }),
}