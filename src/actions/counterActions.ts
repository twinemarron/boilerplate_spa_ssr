import { Action } from 'redux'
import { ActionType } from './ActionTypes'

// export enum ActionType {
//   INCREMENT_COUNTER = 'INCREMENT_COUNTER',
// }

interface IncrementCounterAction extends Action {
  type: ActionType.INCREMENT_COUNTER
  payload: {
    count: number
  }
}

export const incrementCounterAction = (count: number): IncrementCounterAction => ({
  type: ActionType.INCREMENT_COUNTER,
  payload: {
    count: count++,
  },
})

export type CounterActions = IncrementCounterAction
