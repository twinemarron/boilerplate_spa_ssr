import { Action } from 'redux'
import { ActionType } from './ActionType'
import { Mode, Size } from '../enums'

interface ChangeThemeModeAction extends Action {
  type: ActionType.CHANGE_THEME_MODE,
  payload: {
    mode: Mode,
  },
}
export const changeThemeModeAction = (mode: Mode): ChangeThemeModeAction => {
  return {
    type: ActionType.CHANGE_THEME_MODE,
    payload: {
      mode,
    },
  }
}
interface ChangeThemeSizeAction extends Action {
  type: ActionType.CHANGE_THEME_SIZE,
  payload: {
    size: Size,
  },
}
export const changeThemeSizeAction = (size: Size): ChangeThemeSizeAction => {
  return {
    type: ActionType.CHANGE_THEME_SIZE,
    payload: {
      size,
    },
  }
}

export type ThemeInfoActions = ChangeThemeModeAction | ChangeThemeSizeAction
