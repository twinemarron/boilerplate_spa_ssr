import * as React from 'react'
import About from '../components/About'
import Root from '../components/Root'
import Counter from '../components/Counter'
import NotFound from '../components/NotFound';
import { Route } from "react-router-dom";
import { Switch } from "react-router";

interface Props {
  // name?: string;
}
// const App: React.SFC<Props> = ({name}) => {
const App: React.SFC<Props> = () => {
  return (
    <div>
      from App
      <Switch>
        <Route exact path="/" component={Root} />
        <Route path="/about" component={About} />
        <Route path="/counter" component={Counter} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
