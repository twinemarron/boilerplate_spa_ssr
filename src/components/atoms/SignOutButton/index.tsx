import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0 4px;
`
const Link = styled.a`
  display: flex;
  justify-content: center;
  border-radius: 4px;
  border: 1.4px solid #333;
`
const Text = styled.span`
  display: block;
  cursor: pointer;
  padding: 4px 12px;
`

const SignOutButton: React.SFC<any> = (props) => {
  return (
    <Wrapper>
      <Link {...props}>
        <Text>Sign out</Text>
      </Link>
    </Wrapper>
  )
}

export default SignOutButton
