import { ActionType } from '../actions/ActionTypes'
import { CounterActions } from '../actions/counterActions'

export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0
}

export const counterReducer = (state: CounterState = initialState, action: CounterActions) => {
  switch(action.type) {
    case ActionType.INCREMENT_COUNTER:
      return {
        ...state,
        ...action.payload,
      }
    case ActionType.DECREMENT_COUNTER:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

