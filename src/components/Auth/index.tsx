import * as React from 'react'
import { connect, MapDispatchToPropsParam, MapStateToPropsParam } from 'react-redux'
import { Redirect, withRouter, RouteComponentProps } from 'react-router-dom'
import { State } from '../../reducers' 

interface Props extends RouteComponentProps<{}>, React.Props<{}> {
  currentUser: {
    isLoggedIn: boolean
  }
  children: React.ReactElement<{}>
}
const Auth: React.SFC<Props> = (props: Props) => {
  return props.currentUser.isLoggedIn
  ? props.children
  : <Redirect to={'/signIn'} /> 
}

const mapStateToProps = (state: State) => {
  return state
}

export default withRouter(connect(
  mapStateToProps
)(Auth))

