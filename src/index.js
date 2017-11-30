import React, { Component } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import * as reducers from './reducers'
import App from './home'

import store from "./shared/store"

const Main = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

export default Main