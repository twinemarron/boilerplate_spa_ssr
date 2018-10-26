import * as React from 'react'
import { Route } from "react-router-dom";
import { Switch } from "react-router";
import About from './About'
import Root from './Root'
import Counter from './Counter'
import NotFound from './NotFound';

interface Props {
}
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
