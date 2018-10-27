import { Action } from 'redux'
import { ActionType } from './ActionTypes'

interface IncrementCounterAction extends Action {
  type: ActionType.INCREMENT_COUNTER
  payload: {
    count: number
  }
}

export const incrementCounterAction = (count: number): IncrementCounterAction => {
  return {
    type: ActionType.INCREMENT_COUNTER,
    payload: {
      count: count + 1,
    },
  }
}
export type CounterActions = IncrementCounterAction
