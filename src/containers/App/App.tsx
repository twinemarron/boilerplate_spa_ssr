import * as React from 'react'
import { App as AppComponent } from 'components/App'
import { Size, Mode } from 'enums'
import {
  connect,
  MapDispatchToPropsParam,
  MapStateToPropsParam,
} from 'react-redux'
import { State } from 'reducers'
import { Dispatch } from 'redux'
import {
  changeThemeModeAction,
  changeThemeSizeAction,
} from 'actions/ThemeInfoActions'

const mapStateToProps = (state: State) => {
  return state
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeThemeMode: (mode: Mode) => {
      dispatch(changeThemeModeAction(mode))
    },
    changeThemeSize: (size: Size) => {
      dispatch(changeThemeSizeAction(size))
    },
  }
}
export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)
