import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { SignInButton } from '.'

const stories = storiesOf('components/Header', module)

stories.add('SignInButton', () => <SignInButton />)
