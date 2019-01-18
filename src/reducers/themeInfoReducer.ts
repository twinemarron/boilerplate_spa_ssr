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

// const data = {
//   appSetting: 'appSetting',
//   mode: Mode.dark,
//   size: Size.compact,
// }

// putData(data)
// const p1 = getData('appSetting')
// p1.then((result) => {
//   console.log('result: ', result)
// }).catch(err => console.log('err: ', err))

// const getInitialState = () => {
//   getData('appSetting').then((result) => {
//     console.log('result: ', result)
//   return result
//   }).catch(err => console.log('err: ', err))
// }
const getInitialState = () => {
  getData()
    .then(result => {
      console.log('result: ', result)
      return result
    })
    .catch(err => console.log('err: ', err))
}

export const themeInfoReducer = (
  state: ThemeInfoState = initialState,
  action: ThemeInfoActions
) => {
  switch (action.type) {
    case ActionType.CHANGE_THEME_MODE:
      console.log('CHANGE_THEME_MODE action: ', action)
      getData()
        .then(result => {
          console.log('CHANGE_THEME_MODE result: ', result)
          return result
        })
        .catch(err => {
          console.log('CHANGE_THEME_MODE err: ', err)
        })
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
