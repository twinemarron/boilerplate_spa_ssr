import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`

const Footer: React.SFC<any> = (props) => {
  return (
    <Wrapper {...props}>
      <div>Footer</div>
    </Wrapper>
  )
}

export default Footer
