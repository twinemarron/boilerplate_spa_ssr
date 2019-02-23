import * as React from 'react'
import styled from 'styled-components'
import * as theme from 'styled-theming'
import { Size, Mode } from 'enums'
import { textSizes } from 'styles'

export interface Props {
  text: String
}

const h1TextSize = theme('size', {
  [Size.large]: textSizes.t2[Size.large],
  [Size.normal]: textSizes.t2[Size.normal],
  [Size.compact]: textSizes.t2[Size.compact],
})
const h2TextSize = theme('size', {
  [Size.large]: textSizes.t3[Size.large],
  [Size.normal]: textSizes.t3[Size.normal],
  [Size.compact]: textSizes.t3[Size.compact],
})
const h3TextSize = theme('size', {
  [Size.large]: textSizes.t4[Size.large],
  [Size.normal]: textSizes.t4[Size.normal],
  [Size.compact]: textSizes.t4[Size.compact],
})
const h4TextSize = theme('size', {
  [Size.large]: textSizes.t5[Size.large],
  [Size.normal]: textSizes.t5[Size.normal],
  [Size.compact]: textSizes.t5[Size.compact],
})

const TitleWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`
const H1 = styled.h1`
  font-weight: bold;
  font-size: ${h1TextSize};
  padding-left: 16px;
  border-bottom: 4px solid #999;
  border-left: 8px solid #999;
`
const H2 = styled.h2`
  font-weight: bold;
  font-size: ${h2TextSize};
  padding-left: 8px;
  border-left: 8px solid #999;
`
const H3 = styled.h3`
  font-weight: bold;
  font-size: ${h3TextSize};
`
const H4 = styled.h4`
  font-weight: bold;
  font-size: ${h4TextSize};
`

export const Heading1: React.SFC<Props> = (props: Props) => {
  return (
    <TitleWrapper>
      <H1>{props.text}</H1>
    </TitleWrapper>
  )
}

export const Heading2: React.SFC<Props> = (props: Props) => {
  return (
    <TitleWrapper>
      <H2>{props.text}</H2>
    </TitleWrapper>
  )
}

export const Heading3: React.SFC<Props> = (props: Props) => {
  return (
    <TitleWrapper>
      <H3>{props.text}</H3>
    </TitleWrapper>
  )
}

export const Heading4: React.SFC<Props> = (props: Props) => {
  return (
    <TitleWrapper>
      <H4>{props.text}</H4>
    </TitleWrapper>
  )
}
