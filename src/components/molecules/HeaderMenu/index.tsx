import * as React from 'react'
import styled from 'styled-components'
import SignUpButton from '../../atoms/SignUpButton'
import SignInButton from '../../atoms/SignInButton'
import SignOutButton from '../../atoms/SignOutButton'
import ThemeSelectBox from '../../atoms/ThemeSelectBox'

interface Props {
  changeMode(event: React.FormEvent): void
  changeSize(event: React.FormEvent<HTMLSelectElement>): void
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const currentUser = {
  isLoggedIn: false,
}

const HeaderMenu: React.SFC<Props> = (props: Props) => {
  return (
    <Wrapper>
      <ThemeSelectBox
        changeMode={props.changeMode}
        changeSize={props.changeSize}
      />
      {
        currentUser.isLoggedIn ? <SignOutButton /> : <SignInButton /> 
      }
      <SignUpButton />
    </Wrapper>
  )
}

export default HeaderMenu
