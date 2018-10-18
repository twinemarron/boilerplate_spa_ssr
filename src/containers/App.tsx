import * as React from 'react'
import About from '../components/About'
import Topics from '../components/Topics'
import { Route } from "react-router-dom";

interface Props {
  // name?: string;
}
// const App: React.SFC<Props> = ({name}) => {
const App: React.SFC<Props> = () => {
  return (
    <div>
      from App
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  )
}

export default App
