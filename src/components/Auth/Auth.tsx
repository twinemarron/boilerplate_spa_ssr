import * as React from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'

interface Props extends RouteComponentProps<{}>, React.Props<{}> {
  currentUser: {
    isLoggedIn: boolean
  }
  children: React.ReactElement<{}>
}
export const Auth: React.SFC<Props> = (props: Props) => {
  return props.currentUser.isLoggedIn ? (
    props.children
  ) : (
    <Redirect to={'/signIn'} />
  )
}
