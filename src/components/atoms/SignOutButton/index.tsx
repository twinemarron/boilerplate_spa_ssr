import * as React from 'react'
import styled from 'styled-components'
import * as theme from 'styled-theming'
import { Size, Mode } from '../../../enums'
import { textSizes } from '../../../styles'

const fontSize = theme('size', {
  [Size.large]: textSizes.t3[Size.large],
  [Size.normal]: textSizes.t3[Size.normal],
  [Size.compact]: textSizes.t3[Size.compact],
})

const Wrapper = styled.div`
  padding: 0 4px;
`
const Link = styled.a`
  display: flex;
  justify-content: center;
  border-radius: 4px;
  border: 1.4px solid #333;
`
const Text = styled.span`
  display: block;
  cursor: pointer;
  padding: 4px 12px;
  font-size: ${fontSize};
`

const SignOutButton: React.SFC<any> = (props) => {
  return (
    <Wrapper>
      <Link {...props}>
        <Text>Sign out</Text>
      </Link>
    </Wrapper>
  )
}

export default SignOutButton
