import * as React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router'
import { RootPage } from 'containers/RootPage'
import { SignInPage } from 'components/pages/SignInPage'
import { HomePage } from 'components/pages/HomePage'
import { AboutPage } from 'components/pages/AboutPage'
import NotFound from 'components/NotFound'
import { Auth } from 'containers/Auth'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import * as theme from 'styled-theming'
import { colors } from 'styles'
import { Size, Mode } from 'enums'
import {
  connect,
  MapDispatchToPropsParam,
  MapStateToPropsParam,
} from 'react-redux'
import { State } from 'reducers'
import { Dispatch } from 'redux'
import { putData, getData } from 'storage'
import {
  changeThemeModeAction,
  changeThemeSizeAction,
} from 'actions/ThemeInfoActions'
import { ThemeInfoState } from 'reducers/themeInfoReducer'

const textColor = theme('mode', {
  [Mode.light]: colors.text[Mode.light],
  [Mode.dark]: colors.text[Mode.dark],
})

const backgroundColor = theme('mode', {
  [Mode.light]: colors.white,
  [Mode.dark]: colors.grayDarker,
})

const GlobalStyle = createGlobalStyle`
  body {
    color: ${textColor};
    background-color: ${backgroundColor};
  }
`

interface Props {
  themeInfo?: ThemeInfoState
  changeThemeMode(mode: Mode): void
  changeThemeSize(size: Size): void
}
class App extends React.Component<Props> {
  componentDidMount() {
    getData()
      .then(result => {
        if (
          this.props.themeInfo &&
          this.props.themeInfo.mode !== result.themeInfoState.mode
        ) {
          this.props.changeThemeMode(result.themeInfoState.mode)
        }
        if (
          this.props.themeInfo &&
          this.props.themeInfo.size !== result.themeInfoState.size
        ) {
          this.props.changeThemeSize(result.themeInfoState.size)
        }
      })
      .catch(err => console.log('err: ', err))
  }
  render() {
    return (
      <ThemeProvider
        theme={{
          mode:
            this.props.themeInfo && this.props.themeInfo.mode
              ? this.props.themeInfo.mode
              : Mode.light,
          size:
            this.props.themeInfo && !isNaN(this.props.themeInfo.size)
              ? this.props.themeInfo.size
              : Size.normal,
        }}
      >
        <React.Fragment>
          <GlobalStyle />
          <div>
            <Switch>
              <Route exact path="/" component={RootPage} />
              <Route exact path="/signIn" component={SignInPage} />
              <Route exact path="/home" component={HomePage} />
              <Auth currentUser={{ isLoggedIn: true }}>
                <Switch>
                  <Route exact path="/about" component={AboutPage} />
                  <Route component={() => <div>default</div>} />
                </Switch>
              </Auth>
              <Route component={NotFound} />
            </Switch>
          </div>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
