import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Heading1, Props } from './'

console.log('module: ', module)
const stories = storiesOf('components/Headings', module)

const props: Props = {
  text: 'This is title text.',
}

stories.add('Heading1', () => <Heading1 text={props.text} />)
