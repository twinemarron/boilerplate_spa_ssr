import * as React from 'react'
import styled from 'styled-components'
import * as theme from 'styled-theming'
import { colors } from '../../../styles'

const footerHeight = 65

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
`

const Header = styled.header`
`

const Content = styled.section`
  display: flex;
  justify-content: center;
  flex: 1;
`
  // background: #faa;

const Footer = styled.footer`
  height: ${footerHeight}px;
`
  // background: #aaf;

const PageTemplate: React.SFC<any> = ({
  header, children, footer, ...props
}) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      <Content>{children}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  )
}

export default PageTemplate

