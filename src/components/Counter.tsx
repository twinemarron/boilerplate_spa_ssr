import * as React from 'react'

import { Dispatch } from 'redux'
import { connect, MapDispatchToPropsParam, MapStateToPropsParam } from 'react-redux'

import {
  incrementCounterAction,
  decrementCounterAction
} from '../actions/counterActions'

interface Props {
  count: number
  incrementCounter(count: any): void 
  decrementCounter(count: any): void 
}

const Counter: React.SFC<Props> = (props: Props) => {
  return (
    <div>
      <h1>Counter</h1>
      <div>{props.count}</div> 
      <button onClick={() => {props.decrementCounter(props.count)}}>-</button>
      <button onClick={() => {props.incrementCounter(props.count)}}>+</button>
    </div>
  )
}

// export default Counter
// import Counter from '../components/Counter'

const mapStateToProps = (state: any) => {
  return {
    count: state.counter.count
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    incrementCounter: (count: any) => {
      dispatch(incrementCounterAction(count))
    },
    decrementCounter: (count: any) => {
      dispatch(decrementCounterAction(count))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

