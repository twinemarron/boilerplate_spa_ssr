import { ActionType } from '../actions/ActionType'
import { ThemeInfoActions } from '../actions/themeInfoActions'
import { Mode, Size } from '../enums'

export interface ThemeInfoState {
  mode: Mode
  size: Size
}

const initialState: ThemeInfoState = {
  mode: Mode.light,
  size: Size.normal,
}

export const themeInfoReducer = (state: ThemeInfoState = initialState, action: ThemeInfoActions) => {
  switch(action.type) {
    case ActionType.CHANGE_THEME_MODE:
      return {
        ...state,
        ...action.payload,
      }
    case ActionType.CHANGE_THEME_SIZE:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

