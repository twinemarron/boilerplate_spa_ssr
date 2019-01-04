import * as React from 'react'
import styled from 'styled-components'
import * as theme from 'styled-theming'
import { colors } from '../../../styles'
import { Mode } from '../../../enums'

const textColor = theme('mode', {
  [Mode.light]: colors.text[Mode.light],
  [Mode.dark]: colors.text[Mode.dark],
})
const Wrapper = styled.div`
  padding: 0 4px;
`
const Link = styled.a`
  display: flex;
  justify-content: center;
  border-radius: 4px;
  border: 1.4px solid ${textColor};
`
const Text = styled.span`
  display: block;
  cursor: pointer;
  padding: 4px 12px;
  color: ${textColor};
`

const SignInButton: React.SFC<any> = (props) => {
  return (
    <Wrapper>
      <Link {...props}>
        <Text>Sign in</Text>
      </Link>
    </Wrapper>
  )
}

export default SignInButton
