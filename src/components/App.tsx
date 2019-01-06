import * as React from 'react'
import { Route } from "react-router-dom";
import { Switch } from "react-router";
// import About from './About'
// import Root from './Root'
import RootPage from './pages/RootPage'
import SignInPage from './pages/SignInPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
// import Counter from '../containers/Counter'
import Counter from '../components/Counter'
import NotFound from './NotFound';
import Auth from './Auth';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import * as theme from 'styled-theming'
import { colors } from '../styles'
import { Size, Mode } from '../enums'
import { connect, MapDispatchToPropsParam, MapStateToPropsParam } from 'react-redux'

const textColor = theme('mode', {
  [Mode.light]: colors.text[Mode.light],
  [Mode.dark]: colors.text[Mode.dark],
})

const backgroundColor = theme('mode', {
  [Mode.light]: colors.white,
  [Mode.dark]: colors.grayDark,
})

const GlobalStyle = createGlobalStyle`
  body {
    color: ${textColor};
    background-color: ${backgroundColor};
  }
`

// interface Props {}
interface Props {
  themeInfo?: {
    mode: Mode
    size: Size
  }
}

// class App extends React.PureComponent<Props, {}> {
const App: React.SFC<Props> = (props) => {
  console.log('App props: ', props)
  console.log('(props.themeInfo && props.themeInfo.size) || Size.normal: ', (props.themeInfo && props.themeInfo.size) || Size.normal)
  return (
    <ThemeProvider theme={{
      mode: (props.themeInfo && props.themeInfo.mode) || Mode.light,
      size: (props.themeInfo && props.themeInfo.size) || Size.normal,
      // size: Size.large,
      // size: Size.compact,
    }}>
      <React.Fragment>
        <GlobalStyle />
        <div>
          <Switch>
            <Route exact path="/" component={RootPage} />
            <Route exact path="/signIn" component={SignInPage} />
            <Route exact path="/home" component={HomePage} />
            <Route path="/counter" component={Counter} />
            <Auth currentUser={{isLoggedIn: true}}>
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

// export default App
const mapStateToProps = (state: any) => {
  return state
}
export default connect(
  mapStateToProps
)(App)


