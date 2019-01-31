import {
  connect,
  MapDispatchToPropsParam,
  MapStateToPropsParam,
} from 'react-redux'
import { Auth as AuthComponent } from 'components/Auth'
import { State } from 'reducers'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state: State) => {
  return state
}
export const Auth = withRouter(connect(mapStateToProps)(AuthComponent))
