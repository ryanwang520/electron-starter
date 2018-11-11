import React from 'react'

export default class Counter extends React.Component {
  state = {
    count: 4,
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      })
    }, 1000)
  }
  render() {
    return <div>{this.state.count} 110</div>
  }
}
