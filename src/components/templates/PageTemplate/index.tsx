import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
`

// const Header = styled.header`
const Header = styled.div`
  background: #afa;
`

// const Content = styled.section`
const Content = styled.div`
  background: #faa;
`

// const Footer = styled.footer`
const Footer = styled.div`
  background: #aaf;
`

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
