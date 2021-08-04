/* eslint-disable import/no-anonymous-default-export */
import actionTypes from "../actionTypes"

export default {
  addItem: (item) => ({
    type: actionTypes.ADD_ITEM,
    item,
  }),
  updateItem: (index, item) => ({
    type: actionTypes.UPDATE_ITEM,
    index,
    item,
  }),
  deleteItem: (index) => ({
    type: actionTypes.DELETE_ITEM,
    index,
  }),
};