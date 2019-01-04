import * as React from 'react'
import { connect, MapDispatchToPropsParam, MapStateToPropsParam } from 'react-redux'
import { Redirect, withRouter, RouteComponentProps } from 'react-router-dom'

interface Props extends RouteComponentProps<{}>, React.Props<{}> {
  currentUser: {
    isLoggedIn: boolean
  }
  children: React.ReactElement<any>
}
const Auth: React.SFC<Props> = (props: Props) => {
  return props.currentUser.isLoggedIn
  ? props.children
  : <Redirect to={'/signIn'} /> 
}

const mapStateToProps = (state: any) => {
  return state
}

export default withRouter(connect(
  mapStateToProps
)(Auth))

