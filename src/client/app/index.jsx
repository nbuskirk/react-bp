/* Import React Base */
import React from 'react'
/* Borrow render() from react-dom */
import {render} from 'react-dom'


/* Create a new object taking ONLY the React stuff we want */
export class App1 extends React.Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e){
    console.log(square(4))
    console.log(this.props.name)
  }
  render () {
    return (
        <div onClick={this.onClick.bind(this)}>
          <p> Hello {this.props.name}</p>
        </div>
    )
  }
}


/* Render the application to the page node */
var appNode = document.getElementById('app-root')
render(<div><App1 name="App1" /></div>, appNode)
