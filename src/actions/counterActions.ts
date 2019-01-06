import { Action } from 'redux'
import { ActionType } from './ActionType'

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

interface DecrementCounterAction extends Action {
  type: ActionType.DECREMENT_COUNTER
  payload: {
    count: number
  }
}

export const decrementCounterAction = (count: number): DecrementCounterAction => {
  return {
    type: ActionType.DECREMENT_COUNTER,
    payload: {
      count: count - 1,
    },
  }
}
export type CounterActions = IncrementCounterAction | DecrementCounterAction
