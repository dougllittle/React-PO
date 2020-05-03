import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){

    }
    
    render() {
        return (
          <main className="App">
            <div id="po-wrap">
              <div id="po-screen">
              </div>
              <div id="po-controls">
              </div>
            </div>
          </main>
        )
    }
}

export default App