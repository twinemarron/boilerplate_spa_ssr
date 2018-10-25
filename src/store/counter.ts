import { Action } from 'redux'

type CounterPayload = number
interface CounterAction extends Action {
    type: 'ADD_COUNTER'
    payload: CounterPayload
}
type Actions = CounterAction
