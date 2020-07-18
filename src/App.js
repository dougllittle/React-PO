import React, {Component} from 'react'
import {FxRow, ControlsRow} from './Controls.js'
import PoScreen from './Screen.js'
import './css/App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            activeBtns: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(activeBtns){
      console.log(activeBtns);
      this.setState({activeBtns});
    }
    
    render() {
        return (
          <main id="App">
            <div id="UI">
              <div id="po-left-wrap">
                <div id="po-operate">
                  <PoScreen inputValue={this.state.activeBtns} />
                  <div id="po-controls" className="po-operate-piece">
                    <FxRow handleChange={this.handleChange} />
                    <ControlsRow handleChange={this.handleChange} id="po-controls-2" numDex="0" fxNum="0" />
                    <ControlsRow handleChange={this.handleChange} id="po-controls-3" numDex="4" fxNum="1" />
                    <ControlsRow handleChange={this.handleChange} id="po-controls-4" numDex="8" fxNum="2" />
                    <ControlsRow handleChange={this.handleChange} id="po-controls-5" numDex="12" fxNum="3" />
                  </div>
                </div>
              </div>
              <div id="po-right-wrap">
              </div>
            </div>
          </main>
        )
    }
}

export default App