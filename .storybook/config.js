import { configure } from '@storybook/react'

function loadStories() {
  require('../stories/index.js')
}
console.log('require.context: ', require.context)

configure(loadStories, module)
