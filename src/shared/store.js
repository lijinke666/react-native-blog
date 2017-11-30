import { createStore, applyMiddleware, compose } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"

import reducers from "reducers"

const store = createStore(
    reducers,
    compose(                   
        applyMiddleware(thunk,logger)
    )
)

export default store