import * as React from 'react'
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux'
import { Props, Header as HeaderComponent } from 'components/organisms/Header'
import { Dispatch } from 'redux'
import { State } from 'reducers'
import { Size, Mode } from 'enums'
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

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent)
