import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'

const configureStore = () => {
  const middlewares: Array<any> = []
  const store = createStore(reducer, applyMiddleware(...middlewares))
  return store
}

export default configureStore
