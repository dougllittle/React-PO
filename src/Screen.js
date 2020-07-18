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
				{this.props.inputValue}
			</div>
		)
    }

}


export default PoScreen