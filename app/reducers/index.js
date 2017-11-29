
import HomeAction from "./home/reducer"

import { combineReducers } from "redux"     //reducer的合并

const chatReducer = combineReducers({
  HomeAction
})

export default chatReducer