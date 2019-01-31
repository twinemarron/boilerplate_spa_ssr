import * as React from 'react'
import styled from 'styled-components'
import * as theme from 'styled-theming'
import { colors, textSizes } from 'styles'
import { Size, Mode } from 'enums'

const textColor = theme('mode', {
  [Mode.light]: colors.text[Mode.light],
  [Mode.dark]: colors.text[Mode.dark],
})

const headerTitleSize = theme('size', {
  [Size.large]: textSizes.t1[Size.large],
  [Size.normal]: textSizes.t1[Size.normal],
  [Size.compact]: textSizes.t1[Size.compact],
})

const Title = styled.h1`
  font-weight: bold;
  color: #19ab8b;
  font-size: ${headerTitleSize};
`
// color: ${textColor};
interface Props {
  text: String
}

export const HeaderTitle: React.SFC<Props> = props => {
  return <Title>{props.text}</Title>
}
