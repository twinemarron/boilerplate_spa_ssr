import * as React from 'react'
import { connect, MapDispatchToPropsParam, MapStateToPropsParam } from 'react-redux'
import { Dispatch } from 'redux'
import { State } from '../../../reducers'
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
import { putData, getData } from '../../../storage'

export interface Props {
  changeThemeMode(mode: Mode): void 
  changeThemeSize(size: Size): void 
}
const headerHeight = 65

const textColor = theme('mode', {
  [Mode.light]: colors.text[Mode.light],
  [Mode.dark]: colors.text[Mode.dark],
})
const backgroundColor = theme('mode', {
  [Mode.light]: colors.white,
  [Mode.dark]: colors.grayDarker,
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

const Header: React.SFC<Props> = (props: Props) => {
  console.log('props: ', props)
  return (
    <Wrapper {...props}>
      <WidthWrapper>
        <InnerWrapper>
          <HeaderTitle text="Twine"/>
          <HeaderMenu
            changeMode={(event: React.FormEvent<HTMLSelectElement>) => {
              props.changeThemeMode(parseInt(event.currentTarget.value))
            }}
            changeSize={(event: React.FormEvent<HTMLSelectElement>) => {
              props.changeThemeSize(parseInt(event.currentTarget.value))
            }}
          />
        </InnerWrapper>
      </WidthWrapper>
    </Wrapper>
  )
}

const mapStateToProps = (state: State) => {
  return state
}
const mapDispatchToProps = (dispatch: Dispatch) => {
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

