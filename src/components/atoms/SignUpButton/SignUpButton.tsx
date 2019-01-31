import * as React from 'react'
import styled from 'styled-components'
import * as theme from 'styled-theming'
import { colors } from 'styles'
import { Size, Mode } from 'enums'
import { textSizes } from 'styles'

const textColor = theme('mode', {
  [Mode.light]: colors.text[Mode.light],
  [Mode.dark]: colors.text[Mode.dark],
})

const fontSize = theme('size', {
  [Size.large]: textSizes.t5[Size.large],
  [Size.normal]: textSizes.t5[Size.normal],
  [Size.compact]: textSizes.t5[Size.compact],
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
  font-size: ${fontSize};
`

export const SignUpButton: React.SFC = () => {
  return (
    <Wrapper>
      <Link>
        <Text>Sign up</Text>
      </Link>
    </Wrapper>
  )
}

// export default SignUpButton
