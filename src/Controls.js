import React, {Component} from 'react'
import './css/Controls.css'
import $ from 'jquery'
import 'input-knob'

class FxRow extends Component{
	constructor() {
        super()
        this.state = {
            
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){
		this.props.handleChange(event.target.innerText);
    }

    componentDidMount(){
    	const $dial = $(".dial");
		$dial.each(function(){
			$(this).on('knob-move-change', function(){
				var $linearGradient = "linear-gradient(to bottom,transparent " + (100 - Math.round($(this).val())) + "%, rgba(0,0,0,.5) " + (100 - Math.round($(this).val())) + "% " + Math.round($(this).val()) + "%)";
				$(this).parent().css("background", $linearGradient);
			});
		})
    }

    render(){
    	return(
	    	<div className="po-row" id="po-controls-1">
	          <div className={["po-row-button", "po-fx"].join(" ")}>
	          	<button onClick={this.handleChange} className="po-btn">Sound</button>
	          </div>
	          <div className={["po-row-button", "po-fx"].join(" ")}>
	          	<button onClick={this.handleChange} className="po-btn">Pattern</button>
	          </div>
	          <div className={["po-row-button", "po-fx"].join(" ")}>
	          	<button onClick={this.handleChange} className="po-btn">BPM</button>
	          </div>
	          <div className={["po-row-button", "po-fx", "po-knob", "knob-a"].join(" ")}>
	          	<input-knob class={["po-btn", "dial"].join(" ")} value="0" scale="100" min="0" max="100">
	          		<div className="mark"></div>
	          		<span className="indicator"></span>
	          	</input-knob>
	          </div>
	          <div className={["po-row-button", "po-last", "po-fx", "po-knob", "knob-b"].join(" ")}>
	          	<input-knob class={["po-btn", "dial"].join(" ")} value="0" scale="100" min="0" max="100">
	          		<div className="mark"></div>
	          		<span className="indicator"></span>
	          	</input-knob>
	          </div>
	        </div>
		)
    }

}

class ControlsRow extends Component{
	constructor() {
        super()
        this.state = {
            
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){
    	this.props.handleChange(event.target.innerText);
    }

    applyControls(ind){
    	var labels = ["Record", "FX", "Play", "Write"]
    	return labels[ind];
    }

    render(){
    	return(
	        <div className="po-row" data-numdex={this.props.numDex} id={this.props.id}>
	          <div className="po-row-button">
	          	<button onClick={this.handleChange} className="po-btn">{1 + parseInt(this.props.numDex)}</button>
	          </div>
	          <div className="po-row-button">
	          	<button onClick={this.handleChange} className="po-btn">{2 + parseInt(this.props.numDex)}</button>
	          </div>
	          <div className="po-row-button">
	          	<button onClick={this.handleChange} className="po-btn">{3 + parseInt(this.props.numDex)}</button>
	          </div>
	          <div className="po-row-button">
	          	<button onClick={this.handleChange} className="po-btn">{4 + parseInt(this.props.numDex)}</button>
	          </div>
	          <div className={["po-row-button", "po-last", "po-fx"].join(" ")}>
	          	<button onClick={this.handleChange} className="po-btn">{this.applyControls(this.props.fxNum)}</button>
	          </div>
	        </div>
		)
    }

}

export {
	FxRow,
	ControlsRow,
}