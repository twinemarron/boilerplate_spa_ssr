import { combineReducers, Action } from 'redux'
// import { Action } from 'redux'
import { counterReducer, CounterState } from './counterReducer'
import { themeInfoReducer, ThemeInfoState } from './themeInfoReducer'

export interface State {
  counter: CounterState
  themeInfo: ThemeInfoState
}

const reducer = combineReducers({
  counter: counterReducer,
  themeInfo: themeInfoReducer,
})

export default reducer
