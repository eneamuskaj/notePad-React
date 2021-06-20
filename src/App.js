import React from 'react'
import Overview from './components/Overview'

class App extends React.Component {
  constructor() {
    super()
    this.state = { currentVlaue: '', list: [] }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState((prevState) => {
      let array1 = [...prevState.list, prevState.currentVlaue]
      return {
        list: array1,
      }
    })
  }

  handleChange(event) {
    this.setState({ currentVlaue: event.target.value })
  }

  render() {
    return (
      <div>
        <form>
          <input
            name="inputField"
            type="text"
            value={this.state.currentVlaue}
            placeholder="Please input task"
            onChange={this.handleChange}
          />
          {/* <input type="submit" value="Submit" /> */}
          <button onClick={this.handleSubmit}>submit</button>
        </form>
        <Overview name={this.state.list} />
      </div>
    )
  }
}

export default App
