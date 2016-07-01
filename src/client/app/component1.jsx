import React from 'react'
import {render} from 'react-dom'

export default class MyComponent extends React.Component {
  render() {
    console.log(this.props.data);
    return <p>Data Field: {this.props.data.title}</p>
  }
}
