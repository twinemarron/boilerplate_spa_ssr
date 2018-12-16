import * as React from 'react'
import { Route } from "react-router-dom";
import { Switch } from "react-router";
import About from './About'
import Root from './Root'
import HomePage from './pages/HomePage'
import Counter from '../containers/Counter'
import NotFound from './NotFound';

interface Props {
}
const App: React.SFC<Props> = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Root} />
        <Route path="/home" component={HomePage} />
        <Route path="/about" component={About} />
        {
          // <Route path="/counter" component={Counter} />
        }
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
