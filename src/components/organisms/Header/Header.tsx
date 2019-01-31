import * as React from 'react'
import styled from 'styled-components'
import { SignUpButton } from 'components/atoms/SignUpButton'
import { HeaderMenu } from 'components/molecules/HeaderMenu'
import { HeaderTitle } from 'components/atoms/HeaderTitle'
import { WidthWrapper } from 'components/atoms/Wrappers'
import * as theme from 'styled-theming'
import { colors, textSizes } from 'styles'
import { Size, Mode } from 'enums'
import { putData, getData } from 'storage'
import { ThemeInfoState } from 'reducers/themeInfoReducer'

export interface Props {
  themeInfo: ThemeInfoState
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

export const Header: React.SFC<Props> = (props: Props) => {
  return (
    <Wrapper {...props}>
      <WidthWrapper>
        <InnerWrapper>
          <HeaderTitle text="Twine" />
          <HeaderMenu
            changeMode={(event: React.FormEvent<HTMLSelectElement>) => {
              props.changeThemeMode(parseInt(event.currentTarget.value))
            }}
            changeSize={(event: React.FormEvent<HTMLSelectElement>) => {
              props.changeThemeSize(parseInt(event.currentTarget.value))
            }}
            themeInfo={props.themeInfo}
          />
        </InnerWrapper>
      </WidthWrapper>
    </Wrapper>
  )
}
