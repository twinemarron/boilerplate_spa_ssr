import { configure } from '@storybook/react'

const requireContext = require.context('../src', true, /.stories.tsx$/)
function loadStories() {
  // require('../stories/index.js')
  requireContext.keys().forEach(filename => requireContext(filename))
}
// console.log('require.context: ', require.context)

configure(loadStories, module)
