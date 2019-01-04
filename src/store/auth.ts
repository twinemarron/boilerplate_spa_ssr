import { Action } from 'redux'

type CounterPayload = number
interface AuthAction extends Action {
    type: 'ADD_COUNTER'
    payload: CounterPayload
}
type Actions = AuthAction
