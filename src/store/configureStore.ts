import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
  const middlewares: Array<() => any> = []
  const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)))
  return store
}

export default configureStore
