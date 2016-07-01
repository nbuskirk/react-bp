import React from 'react'
import {render} from 'react-dom'
import MyComponent from './component1.jsx'
import data from 'json!../../data/data.json'

export class App1 extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
        <MyComponent data={data.glossary}/>
    )
  }
}

/* Render the application to the page node */
var appNode = document.getElementById('app-root')
render(<div><App1 name="App1" /></div>, appNode)
