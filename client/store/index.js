import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

// import {composeWithDevTools} from 'redux-devtools-extension'

// reducers
// import entryReducer from './entry'
// import keywordReducer from './keyword'

function dummyReducer (state = {}, action) {
  return state;
}

const store = createStore(
  dummyReducer,
  applyMiddleware(thunkMiddleware, createLogger())
)

export default store

// const reducer = combineReducers({
//   user,
//   shapes,
//   cart
// })

// const middleware = composeWithDevTools(
//   applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
// )

// export * from './user'
// export * from './shapes'
// export * from './cart'
