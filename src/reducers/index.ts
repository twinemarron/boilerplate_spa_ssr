import { combineReducers, Action } from 'redux'
import { themeInfoReducer, ThemeInfoState } from './themeInfoReducer'

export interface State {
  themeInfo: ThemeInfoState
}

const reducer = combineReducers({
  themeInfo: themeInfoReducer,
})

export default reducer
