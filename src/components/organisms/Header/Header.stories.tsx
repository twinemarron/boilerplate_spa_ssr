import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Header, Props } from './'
import { ThemeInfoState } from 'reducers/themeInfoReducer'
import { Size, Mode } from 'enums'

const sampleState: ThemeInfoState = {
  mode: Mode.light,
  size: Size.normal,
}
const stories = storiesOf('components/Header', module)
stories.add('Header', () => (
  <Header
    themeInfo={sampleState}
    changeThemeMode={(mode: Mode): void => {}}
    changeThemeSize={(size: Size): void => {}}
  />
))
