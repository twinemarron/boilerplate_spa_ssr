import * as React from 'react'

interface AppProps {
  name?: string;
}
const App: React.SFC<AppProps> = ({name}) => {
// const App = ({name}) => {
  return (
    <div>
      App
    </div>
  )
}

export default App
