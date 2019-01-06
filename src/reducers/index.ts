import { combineReducers, Action } from 'redux'
// import { Action } from 'redux'
import { counterReducer } from './counterReducer'
import { themeInfoReducer } from './themeInfoReducer'

const reducer = combineReducers({
  // counter: counterReducer,
  themeInfo: themeInfoReducer,
})

export default reducer
