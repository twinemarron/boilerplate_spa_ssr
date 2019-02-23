import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { SignUpButton } from './SignUpButton'

const stories = storiesOf('components/Atoms', module)

stories.add('SignUpButton', () => <SignUpButton />)
