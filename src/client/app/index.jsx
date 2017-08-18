import React from 'react'
import {render} from 'react-dom'
import styles from './styles.less'
import DlpTool from './component1.jsx'


export class App1 extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
        <DlpTool />
    )
  }
}

var appNode = document.getElementById('app-root')
render(<div><App1 name="App1" /></div>, appNode)
