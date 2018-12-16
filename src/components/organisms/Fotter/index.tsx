import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const Footer: React.SFC<any> = (props) => {
  return (
    <Wrapper {...props}>
      <InnerWrapper>
        <div>Footer</div>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Footer
