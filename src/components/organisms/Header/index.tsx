import * as React from 'react'
import styled from 'styled-components'
import SignUpButton from '../../atoms/SignUpButton'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 65px;
`

console.log('Wrapper : ', Wrapper);
const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  height: 100%;
`

const Title = styled.h1`
  font-weight: bold;
`
const RightBox = styled.div`
  display: flex;
  align-items: center;
`

const Header: React.SFC<any> = (props) => {
  // return <div>Header</div>
  return (
    <Wrapper {...props}>
      <InnerWrapper>
        <Title>HeaderTitle</Title>
        <RightBox>
          <SignUpButton />
        </RightBox>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Header
