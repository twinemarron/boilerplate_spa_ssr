import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = (state: any) => {
  return state
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

