import * as React from 'react'
import styled from 'styled-components'
import SignUpButton from '../../atoms/SignUpButton'
import SignInButton from '../../atoms/SignInButton'
import SignOutButton from '../../atoms/SignOutButton'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const currentUser = {
  isLoggedIn: false,
}

const HeaderMenu: React.SFC<any> = (props) => {
  return (
    <Wrapper>
      {
        currentUser.isLoggedIn ? <SignOutButton /> : <SignInButton /> 
      }
      <SignUpButton />
    </Wrapper>
  )
}

export default HeaderMenu
