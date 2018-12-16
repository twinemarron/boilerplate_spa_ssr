import React from 'react'
import styled from 'styled-components'

const ATag = styled.a`
  display: flex;
  justify-content: center;
`

const SignUpButton: React.SFC<any> = (props) => {
  return (
    <ATag {...props}>
      <div>SignUpButton</div>
    </ATag>
  )
}

export default SignUpButton
