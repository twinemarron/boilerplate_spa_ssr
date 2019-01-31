import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ThemeSelectBox, Props } from './ThemeSelectBox'
import { ThemeInfoState } from 'reducers/themeInfoReducer'
import { Size, Mode } from 'enums'

const stories = storiesOf('components/Header', module)

const sampleState: ThemeInfoState = {
  mode: Mode.light,
  size: Size.normal,
}

stories.add('ThemeSelectBox', () => (
  <ThemeSelectBox
    changeMode={() => {}}
    changeSize={() => {}}
    themeInfo={sampleState}
  />
))
