import React, {Component} from 'react'
import './css/Screen.css'
import $ from 'jquery'
import 'input-knob'

class PoScreen extends Component{
	constructor() {
        super()
        this.state = {
            
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){

    }

    componentDidMount(){

    }

    render(){
    	return(
			<div id="po-screen" className="po-operate-piece">
				<div className="po-screen_main">
					{this.props.inputValue}
				</div>
				<div className="po-screen_bottom">
					{this.props.dialVals.map((item, index)=>(
						<div key={index} className="dial_val">{item}</div>
					))}
				</div>
			</div>
		)
    }

}


export default PoScreen