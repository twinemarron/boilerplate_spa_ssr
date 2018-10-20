import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './containers/App'


import configureStore from './store/store'

// type MyReducerPayload = number
// interface MyReducerAction extends Action {
//     type: 'MY_REDUCER_DO_SOMETHING'
//     payload: MyReducerPayload
// }
//
// type Actions = MyReducerAction
//
// type State = number
// const init = (): State => {
//   return 0
// }
//
// const myReducer = (state: State = init(), action: Actions) => {
//   switch(action.type) {
//     case 'MY_REDUCER_DO_SOMETHING':
//       return action.payload
//     default:
//       return state
//   }
// }
//
//
// const store = createStore(myReducer)

const store = configureStore()

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('app')
)

