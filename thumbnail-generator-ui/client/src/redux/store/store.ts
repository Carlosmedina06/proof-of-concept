import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'

import yourReducer from '../reducers/reducers'
import uploadImageEpic from '../epics/epics'

const composeEnhancers = composeWithDevTools({})
const rootReducer = combineReducers({
  yourReducer,
})

const epicMiddleware = createEpicMiddleware()

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)))

epicMiddleware.run(uploadImageEpic)

export default store
