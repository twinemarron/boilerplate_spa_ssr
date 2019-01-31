import * as React from 'react'
import styled from 'styled-components'
import * as theme from 'styled-theming'
import { Size, Mode } from 'enums'
import { textSizes } from 'styles'

interface Props {
  text: String
}

const h1TextSize = theme('size', {
  [Size.large]: textSizes.t2[Size.large],
  [Size.normal]: textSizes.t2[Size.normal],
  [Size.compact]: textSizes.t2[Size.compact],
})

const TitleWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`
const H1 = styled.h1`
  font-weight: bold;
  font-size: ${h1TextSize};
  border-bottom: 4px solid #999;
`

export const Heading1: React.SFC<Props> = (props: Props) => {
  return (
    <TitleWrapper>
      <H1>{props.text}</H1>
    </TitleWrapper>
  )
}
