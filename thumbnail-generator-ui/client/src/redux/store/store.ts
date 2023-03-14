import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import yourReducer from '../reducers/reducers'

const rootReducer = combineReducers({
  yourReducer,
})

const epicMiddleware = createEpicMiddleware()

const store = createStore(rootReducer, applyMiddleware(epicMiddleware))

export default store
