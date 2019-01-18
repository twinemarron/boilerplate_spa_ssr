import * as React from 'react'
import { CounterState } from '../reducers/counterReducer'

import { Dispatch } from 'redux'
import {
  connect,
  MapDispatchToPropsParam,
  MapStateToPropsParam,
} from 'react-redux'

import {
  incrementCounterAction,
  decrementCounterAction,
} from '../actions/counterActions'
import { State } from '../reducers'

interface Props {
  count: CounterState['count']
  incrementCounter(count: CounterState['count']): void
  decrementCounter(count: CounterState['count']): void
}

const Counter: React.SFC<Props> = (props: Props) => {
  return (
    <div>
      <h1>Counter</h1>
      <div>{props.count}</div>
      <button
        onClick={() => {
          props.decrementCounter(props.count)
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          props.incrementCounter(props.count)
        }}
      >
        +
      </button>
    </div>
  )
}

const mapStateToProps = (state: State) => {
  return {
    count: state.counter.count,
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    incrementCounter: (count: CounterState['count']) => {
      dispatch(incrementCounterAction(count))
    },
    decrementCounter: (count: CounterState['count']) => {
      dispatch(decrementCounterAction(count))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
