import React from 'react'
import {render} from 'react-dom'
import {Panel, Button, ButtonToolbar} from 'react-bootstrap'

export default class MyComponent extends React.Component {
  constructor(props){
  	super(props);
  	this.handleInput = this.handleInput.bind(this);
    this.reset = this.reset.bind(this);
  	this.state = {
  		inputstring: []
  	}
  }
  reset(){
    this.setState({
      inputstring: null
    })
    this.refs.ta.value=''
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
    
    return htmlstr.map((str,i)=>{
      //dictionary lookup
      if(str.includes('dlp.') && str.includes('.type=text')){
        let panel_name = str.split('.');
        panel_name = panel_name[1];
        return <div key={i} id={panel_name} className='dlpPanel'></div>
      } else if(str.includes('dlp.') && str.includes('.text=')) {
        let panel_name = str.split('.');
        console.log(panel_name)
        panel_name = panel_name[1];
        return <p key={i}>{str}</p>
      } else { 
        return <p key={i}>{str}</p>
      }
    })
  }
  render() {
    return (
	    <div id='application'>
        <h1 className='lead'>DLP Tool</h1>
  			<Panel header='DLP to HTML' bsStyle="primary">
        <p>View the confluence article <a href='https://confluence.lowermybills.com/display/ENG/DLP+2.0+configuration+Best+Practices' target='_blank'>here</a> for best practices on writing DLP.</p>
          <textarea className='form-control' rows="5" ref="ta" onChange={this.handleInput} placeholder='dlp... eg: dlp.panel.type=text' />
          {<ButtonToolbar>
            <Button bsStyle='primary' disabled>Convert</Button>
            <Button bsStyle='primary' onClick={this.reset}>Reset</Button>
          </ButtonToolbar>}
        </Panel>	
  	    <Panel header='Preview' bsStyle='warning'>
          {
            this.state.inputstring
          }
        </Panel>
        <small>
          <p>dlp.divname.type=text<br/>dlp.divname.text=this is a test</p>
        </small>
		  </div>
  	)
  }
}
