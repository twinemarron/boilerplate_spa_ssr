import { ActionType } from '../actions/ActionType'
import { ThemeInfoActions } from '../actions/themeInfoActions'
import { Mode, Size } from '../enums'
import { putData, getData } from '../storage'

export interface ThemeInfoState {
  mode: Mode
  size: Size
}

const initialState: ThemeInfoState = {
  mode: Mode.light,
  size: Size.normal,
}

const getInitialState = () => {
  getData()
    .then(result => {
      return result
    })
    .catch(err => console.log('err: ', err))
}

export const themeInfoReducer = (
  state: ThemeInfoState = initialState,
  action: ThemeInfoActions
) => {
  switch (action.type) {
    case ActionType.CHANGE_THEME_MODE: {
      const data = {
        appSetting: 'appSetting',
        themeInfoState: {
          mode: action.payload.mode,
          size: state.size,
        },
      }
      putData(data)
      return {
        ...state,
        ...action.payload,
      }
    }
    case ActionType.CHANGE_THEME_SIZE: {
      const data = {
        appSetting: 'appSetting',
        themeInfoState: {
          mode: state.mode,
          size: action.payload.size,
        },
      }
      putData(data)
      return {
        ...state,
        ...action.payload,
      }
    }
    default:
      return state
  }
}
