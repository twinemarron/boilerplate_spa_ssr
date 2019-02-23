import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { SignOutButton } from './SignOutButton'

const stories = storiesOf('components/Atoms', module)

stories.add('SignOutButton', () => <SignOutButton />)
