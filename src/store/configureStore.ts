import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'

const configureStore = (): any => {
  const middlewares: Array<any> = []
  const store = createStore(reducer, applyMiddleware(...middlewares))
  return store
}

export default configureStore
