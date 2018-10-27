import { Dispatch } from 'redux'
import { connect, MapDispatchToPropsParam, MapStateToPropsParam } from 'react-redux'

import Counter from '../components/Counter'
import { incrementCounterAction } from '../actions/counterActions'

const mapStateToProps = (state: any) => {
  return {
    count: state.counter.count 
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    incrementCounter: (count: any) => {
      console.log('count!!: ', count);
      dispatch(incrementCounterAction(count))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
