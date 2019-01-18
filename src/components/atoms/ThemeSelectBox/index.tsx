import * as React from 'react' 
import { Mode, Size } from '../../../enums'

interface Props {
  changeMode(event: React.FormEvent): void
  changeSize(event: React.FormEvent<HTMLSelectElement>): void
}
interface State {
  size: Size
}

class ThemeSelectBox extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      size: Size.normal,
    }
  }
  handleChangeSize = (event: React.FormEvent<HTMLSelectElement>) => {
    this.setState({size: parseInt(event.currentTarget.value, 10)})
    this.props.changeSize(event)
  }
  render () {
    return (
      <div>
        <p>
          Mode
          <select
            onChange={(event) => {
              this.props.changeMode(event)
            }}
          >
            <option value={Mode.light}>
              light
            </option>
            <option value={Mode.dark}>
              dark
            </option>
          </select>
        </p>
        <p>
          Size
          <select
            onChange={this.handleChangeSize}
            value={this.state.size}
          >
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
