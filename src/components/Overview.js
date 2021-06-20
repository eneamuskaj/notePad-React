import React from 'react'

class Overview extends React.Component {
  render(props) {
    return this.props.name.map((item) => <li key={item}>{item}</li>)
  }
}

export default Overview
