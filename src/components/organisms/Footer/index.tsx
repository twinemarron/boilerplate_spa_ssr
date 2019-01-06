import * as React from 'react'
import styled from 'styled-components'
import * as theme from 'styled-theming'
import { Size } from '../../../enums'
import { textSizes } from '../../../styles'

const footerTextSize = theme('size', {
  [Size.large]: textSizes.t6[Size.large],
  [Size.normal]: textSizes.t6[Size.normal],
  [Size.compact]: textSizes.t6[Size.compact],
})

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`
const FooterEl = styled.footer`
  font-size: ${footerTextSize};
`

const Footer: React.SFC<any> = (props) => {
  return (
    <Wrapper {...props}>
      <FooterEl>Copyright (C) 2019 Twine. All Rights Reserved.</FooterEl>
    </Wrapper>
  )
}

export default Footer
