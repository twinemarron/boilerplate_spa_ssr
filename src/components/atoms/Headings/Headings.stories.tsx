import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Heading1, Heading2, Heading3, Heading4, Props } from './'

const stories = storiesOf('components/Headings', module)

stories.add('Heading1', () => <Heading1 text="This is Heading1 text." />)
stories.add('Heading2', () => <Heading2 text="This is Heading2 text." />)
stories.add('Heading3', () => <Heading3 text="This is Heading3 text." />)
stories.add('Heading4', () => <Heading4 text="This is Heading4 text." />)
