import * as React from 'react'

interface Props {
  count: number
  incrementCounter(count: any): void 
  decrementCounter(count: any): void 
}

const Counter: React.SFC<Props> = (props: Props) => {
  console.log('Counter props: ', props)
  return (
    <div>
      <h1>Counter</h1>
      <div>{props.count}</div> 
      <button onClick={() => {props.decrementCounter(props.count)}}>-</button>
      <button onClick={() => {props.incrementCounter(props.count)}}>+</button>
    </div>
  )
}

export default Counter

