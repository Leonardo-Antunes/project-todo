import { combineReducers } from "redux";
import todos from "./todos";
import inputs from "./inputs";


export default combineReducers({
  todos,
  inputs
})