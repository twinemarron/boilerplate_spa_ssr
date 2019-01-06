import * as React from 'react' 
import { Mode, Size } from '../../../enums'

interface Props {
  changeMode(event: any): void
  changeSize(event: any): void
}

// const ThemeSelectBox: React.SFC<any> = (props: Props) => {
class ThemeSelectBox extends React.PureComponent<any, { size: Size }> {
  constructor(props: Props) {
    super(props)
    this.state = {
      size: Size.normal,
    }
  }
  handleChangeSize = (event: any) => {
    console.log(event.target.value)
    this.setState({size: event.target.value})
    this.props.changeSize(event)
  }
  render () {
    console.log(this)
  return (
    <div>
      <p>
        Mode
        <select
          onChange={(event) => {
            // props.changeMode(event)
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
          // onChange={(event) => {console.log('onChanged event.target.value: ', event.target.value)}}
          // onChange={(event) => {this.handleChangeSize(event)}}
          onChange={this.handleChangeSize}
          // onChange={(event) => {
          //   props.changeSize(event)
          // }}
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
