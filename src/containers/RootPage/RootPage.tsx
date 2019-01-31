import { RootPage as RootPageComponent } from 'components/pages/RootPage'
import { State } from 'reducers'
import { Dispatch } from 'redux'
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux'

const mapStateToProps = (state: State, b: any) => {
  return state
}

export const RootPage = connect(mapStateToProps)(RootPageComponent)
