import { combineReducers } from 'redux'
import { Action } from 'redux'

import { counterReducer } from './counterReducer'

// type MyReducerPayload = number
// interface MyReducerAction extends Action {
//     type: 'MY_REDUCER_DO_SOMETHING'
//     payload: MyReducerPayload
// }
// type Actions = MyReducerAction
// type State = number
// export const init = (): State => {
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

const reducer = combineReducers({
  // myReducer,
  counter: counterReducer,
})

export default reducer
