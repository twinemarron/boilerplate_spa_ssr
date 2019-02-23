import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { HeaderTitle, Props } from './'

const props: Props = {
  text: 'Text in HeaderTitle.',
}

const stories = storiesOf('components/Atoms', module)
stories.add('HeaderTitle', () => <HeaderTitle text={props.text} />)
