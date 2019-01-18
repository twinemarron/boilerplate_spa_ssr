import { Action } from 'redux'
import { ActionType } from './ActionType'
import { CounterState } from '../reducers/counterReducer'

interface IncrementCounterAction extends Action {
  type: ActionType.INCREMENT_COUNTER
  payload: CounterState
}
export const incrementCounterAction = (count: CounterState['count']): IncrementCounterAction => {
  return {
    type: ActionType.INCREMENT_COUNTER,
    payload: {
      count: count + 1,
    },
  }
}

interface DecrementCounterAction extends Action {
  type: ActionType.DECREMENT_COUNTER
  payload: CounterState
}

export const decrementCounterAction = (count: CounterState['count']): DecrementCounterAction => {
  return {
    type: ActionType.DECREMENT_COUNTER,
    payload: {
      count: count - 1,
    },
  }
}
export type CounterActions = IncrementCounterAction | DecrementCounterAction
