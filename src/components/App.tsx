import * as React from 'react'
import { Route } from "react-router-dom";
import { Switch } from "react-router";
import RootPage from './pages/RootPage'
import NotFound from './NotFound';

interface Props {
}
const App: React.SFC<Props> = (props) => {
  return (
    <div>
      <Route exact path="/" component={RootPage} />
        {
      // <Switch>
      //   {
      // <Route exact path="/" component={() => <div>RootのPage</div>} />
      //     // <Route exact path="/" component={RootPage} />
      //   }
      //   <Route exact path="/" component={() => <div>RootのPage</div>} />
      //   <Route component={NotFound} />
      // </Switch>
        }
    </div>
  )
}

export default App
