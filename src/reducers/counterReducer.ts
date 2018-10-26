import { ActionType } from '../actions/ActionTypes'
import { CounterActions } from '../actions/CounterActions'

export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0
}

export const counterReducer = (state: CounterState = initialState, action: CounterActions) => {
  switch(action.type) {
    case ActionType.INCREMENT_COUNTER:
      const newState = {
        ...state,
        ...action.payload,
      }
      return newState
    default:
      return state
  }
}

