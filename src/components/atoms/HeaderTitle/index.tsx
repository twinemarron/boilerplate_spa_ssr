import * as React from 'react'
import styled from 'styled-components'
import * as theme from 'styled-theming'
import { colors, textSizes } from '../../../styles'
import { Size, Mode } from '../../../enums'

const textColor = theme('mode', {
  [Mode.light]: colors.text[Mode.light],
  [Mode.dark]: colors.text[Mode.dark],
  // light: colors.text.light,
  // dark: colors.text.dark,
})

const headerTitleSize = theme('size', {
  [Size.large]: textSizes.headerTitle[Size.large],
  [Size.normal]: textSizes.headerTitle[Size.normal],
  [Size.compact]: textSizes.headerTitle[Size.compact],
})

const Title = styled.h1`
  font-weight: bold;
  color: ${textColor};
  font-size: ${headerTitleSize};
`

interface Props {
  text: String
}

const HeaderTitle: React.SFC<any> = (props: Props) => {
  return (
    <Title>{props.text}</Title>
  )
}
export default HeaderTitle
