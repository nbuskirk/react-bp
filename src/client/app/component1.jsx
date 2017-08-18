import React from 'react'
import {render} from 'react-dom'
import {Panel, Button, ButtonToolbar} from 'react-bootstrap'

export default class MyComponent extends React.Component {
  constructor(props){
  	super(props);
  	this.handleInput = this.handleInput.bind(this);
  	this.state = {
  		inputstring: []
  	}
  }
  handleInput(event) {
    let currentLines = event.target.value.split('\n');
    if(currentLines[0].length>3) {
      let dlp = this._todlp(currentLines);
      this.setState({
        inputstring: dlp
      })
    }
  }
  _todlp(htmlstr) {
    console.log(htmlstr);
    return htmlstr
  }
  render() {
    return (
	    <div id='application'> 
  			<Panel header='DLP to HTML' bsStyle="primary">
        <p>View the confluence article <a href='https://confluence.lowermybills.com/display/ENG/DLP+2.0+configuration+Best+Practices' target='_blank'>here</a> for best practices on writing DLP.</p>
          <textarea className='form-control' rows="5" onChange={this.handleInput} placeholder='Write or paste in some DLP...' />
          <ButtonToolbar>
            <Button bsStyle='primary' disabled>Import</Button>
            <Button bsStyle='primary' disabled>Export</Button>
          </ButtonToolbar>
        </Panel>	
  	    <Panel header='Preview' bsStyle='warning'>
          {
            this.state.inputstring.map((str,i) => {
              return <p key={i}>{str}</p>
            })
          }
        </Panel>
		  </div>
  	)
  }
}
