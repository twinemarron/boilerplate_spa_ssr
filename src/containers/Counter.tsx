import { Dispatch } from 'redux'
import { connect, MapDispatchToPropsParam, MapStateToPropsParam } from 'react-redux'

import Counter from '../components/Counter'
import {
  incrementCounterAction,
  decrementCounterAction
} from '../actions/counterActions'

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
