import * as React from 'react'
import styled from 'styled-components'
import SignUpButton from '../../atoms/SignUpButton'
import HeaderMenu from '../../molecules/HeaderMenu'
import HeaderTitle from '../../atoms/HeaderTitle'
import { WidthWrapper } from '../../atoms/Wrappers'
import * as theme from 'styled-theming'
import { colors, textSizes } from '../../../styles'
import {
  // Size,
  Mode
} from '../../../enums'

const headerHeight = 65

const textColor = theme('mode', {
  [Mode.light]: colors.text[Mode.light],
  [Mode.dark]: colors.text[Mode.dark],
  // light: colors.text.light,
  // dark: colors.text.dark,
})
const backgroundColor = theme('mode', {
  [Mode.light]: colors.white,
  [Mode.dark]: colors.grayDark,
  // light: colors.white,
  // dark: colors.grayDark,
})

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${textColor};
  background: ${backgroundColor};
`
const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  height: ${headerHeight}px;
`
  // border-bottom: 1px solid ${textColor};

const Title = styled.h1`
  font-weight: bold;
`

const Header: React.SFC<any> = (props) => {
  // return <div>Header</div>
  return (
    <Wrapper {...props}>
      <WidthWrapper>
        <InnerWrapper>
          <HeaderTitle text="Twine"/>
          <HeaderMenu />
        </InnerWrapper>
      </WidthWrapper>
    </Wrapper>
  )
}

export default Header
