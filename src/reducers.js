
import HomeReducer from "./home/reducer"

import { combineReducers } from "redux"     //reducer的合并

const chatReducer = combineReducers({
  HomeReducer
})

export default chatReducer