import { Dispatch } from 'redux'
import { connect, MapDispatchToPropsParam, MapStateToPropsParam } from 'react-redux'

import Counter from '../components/Counter'

const mapStateToProps = (state: any) => ({
})
const mapDispatchToProps = (dispatch: any) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
