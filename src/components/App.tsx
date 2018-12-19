import * as React from 'react'
import { Route } from "react-router-dom";
import { Switch } from "react-router";
import About from './About'
// import Root from './Root'
import RootPage from './pages/RootPage'
import HomePage from './pages/HomePage'
import Counter from '../containers/Counter'
import NotFound from './NotFound';

interface Props {
}
const App: React.SFC<Props> = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={RootPage} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
