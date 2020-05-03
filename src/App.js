import React, {Component} from 'react';
import './css/App.css';

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
          <main id="App">
            <div id="UI">
              <div id="po-left-wrap">
                <div id="po-operate">
                  <div id="po-screen" className="po-operate-piece">
                  </div>
                  <div id="po-controls" className="po-operate-piece">
                    <div className="po-row" id="po-controls-1">
                      <div className={["po-row-button", "po-fx"].join(" ")}>
                      </div>
                      <div className={["po-row-button", "po-fx"].join(" ")}>
                      </div>
                      <div className={["po-row-button", "po-fx"].join(" ")}>
                      </div>
                      <div className={["po-row-button", "po-fx"].join(" ")}>
                      </div>
                      <div className={["po-row-button", "po-last", "po-fx"].join(" ")}>
                      </div>
                    </div>
                    <div className="po-row" id="po-controls-2">
                      <div className="po-row-button">
                      </div>
                      <div className="po-row-button">
                      </div>
                      <div className="po-row-button">
                      </div>
                      <div className="po-row-button">
                      </div>
                      <div className={["po-row-button", "po-last", "po-fx"].join(" ")}>
                      </div>
                    </div>
                    <div className="po-row" id="po-controls-3">
                      <div className="po-row-button">
                      </div>
                      <div className="po-row-button">
                      </div>
                      <div className="po-row-button">
                      </div>
                      <div className="po-row-button">
                      </div>
                      <div className={["po-row-button", "po-last", "po-fx"].join(" ")}>
                      </div>
                    </div>
                    <div className="po-row" id="po-controls-4">
                      <div className="po-row-button">
                      </div>
                      <div className="po-row-button">
                      </div>
                      <div className="po-row-button">
                      </div>
                      <div className="po-row-button">
                      </div>
                      <div className={["po-row-button", "po-last", "po-fx"].join(" ")}>
                      </div>
                    </div>
                    <div className="po-row" id="po-controls-5">
                      <div className="po-row-button">
                      </div>
                      <div className="po-row-button">
                      </div>
                      <div className="po-row-button">
                      </div>
                      <div className="po-row-button">
                      </div>
                      <div className={["po-row-button", "po-last", "po-fx"].join(" ")}>
                      </div>
                    </div>
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