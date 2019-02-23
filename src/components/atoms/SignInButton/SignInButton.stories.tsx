import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { SignInButton } from '.'

const stories = storiesOf('components/Atoms', module)

stories.add('SignInButton', () => <SignInButton />)
