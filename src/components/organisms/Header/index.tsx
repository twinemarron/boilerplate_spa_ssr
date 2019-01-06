import * as React from 'react'
import { connect, MapDispatchToPropsParam, MapStateToPropsParam } from 'react-redux'
import styled from 'styled-components'
import SignUpButton from '../../atoms/SignUpButton'
import HeaderMenu from '../../molecules/HeaderMenu'
import HeaderTitle from '../../atoms/HeaderTitle'
import { WidthWrapper } from '../../atoms/Wrappers'
import * as theme from 'styled-theming'
import { colors, textSizes } from '../../../styles'
import {
  Size,
  Mode
} from '../../../enums'
import {
  changeThemeModeAction,
  changeThemeSizeAction
} from '../../../actions/ThemeInfoActions'

interface Props {
  changeThemeMode(event: any): void 
  changeThemeSize(event: any): void 
}
const headerHeight = 65

const textColor = theme('mode', {
  [Mode.light]: colors.text[Mode.light],
  [Mode.dark]: colors.text[Mode.dark],
})
const backgroundColor = theme('mode', {
  [Mode.light]: colors.white,
  [Mode.dark]: colors.grayDark,
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

const Title = styled.h1`
  font-weight: bold;
`

const Header: React.SFC<any> = (props: Props) => {
  return (
    <Wrapper {...props}>
      <WidthWrapper>
        <InnerWrapper>
          <HeaderTitle text="Twine"/>
          <HeaderMenu
            changeMode={(event: any) => {
              props.changeThemeMode(event.target.value)
            }}
            changeSize={(event: any) => {
              props.changeThemeSize(event.target.value)
            }}
          />
        </InnerWrapper>
      </WidthWrapper>
    </Wrapper>
  )
}

const mapStateToProps = (state: any) => {
  return state
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    changeThemeMode: (mode: Mode) => {
      dispatch(changeThemeModeAction(mode))
    },
    changeThemeSize: (size: Size) => {
      dispatch(changeThemeSizeAction(size))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

