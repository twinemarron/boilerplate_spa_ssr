import * as React from 'react'
import { Mode, Size } from '../../../enums'
import { ThemeInfoState } from '../../../reducers/themeInfoReducer'

interface Props {
  themeInfo: ThemeInfoState
  changeMode(event: React.FormEvent): void
  changeSize(event: React.FormEvent<HTMLSelectElement>): void
}
interface State {
  size: Size
  mode: Mode
}

class ThemeSelectBox extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    const { mode = Mode.light, size = Size.normal } = this.props.themeInfo
    this.state = {
      mode,
      size,
    }
  }
  componentDidMount() {
    const { mode, size } = this.props.themeInfo
    this.setState({
      mode,
      size,
    })
  }
  componentDidUpdate() {
    const { mode, size } = this.props.themeInfo
    this.setState({
      mode,
      size,
    })
  }
  handleChangeMode = (event: React.FormEvent<HTMLSelectElement>) => {
    this.setState({ mode: parseInt(event.currentTarget.value, 10) })
    this.props.changeMode(event)
  }
  handleChangeSize = (event: React.FormEvent<HTMLSelectElement>) => {
    this.setState({ size: parseInt(event.currentTarget.value, 10) })
    this.props.changeSize(event)
  }
  render() {
    console.log('ThemeSelectBox this.props.themeInfo: ', this.props.themeInfo)
    return (
      <div>
        <p>
          Mode
          <select value={this.state.mode} onChange={this.handleChangeMode}>
            <option value={Mode.light}>light</option>
            <option value={Mode.dark}>dark</option>
          </select>
        </p>
        <p>
          Size
          <select onChange={this.handleChangeSize} value={this.state.size}>
            <option value={Size.large}>large</option>
            <option value={Size.normal}>normal</option>
            <option value={Size.compact}>compact</option>
          </select>
        </p>
      </div>
    )
  }
}
export default ThemeSelectBox
