import * as React from 'react'
import styled from 'styled-components'
import * as theme from 'styled-theming'
import { Size } from '../../../enums'
import { textSizes } from '../../../styles'

const footerTextSize = theme('size', {
  [Size.large]: textSizes.footer[Size.large],
  [Size.normal]: textSizes.footer[Size.normal],
  [Size.compact]: textSizes.footer[Size.compact],
  // large: textSizes.footer.large,
  // normal: textSizes.footer.normal,
  // compact: textSizes.footer.compact,
})

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-size: ${footerTextSize};
`

const Footer: React.SFC<any> = (props) => {
  return (
    <Wrapper {...props}>
      <div>Copyright (C) 2019 Twine. All Rights Reserved.</div>
    </Wrapper>
  )
}

export default Footer
