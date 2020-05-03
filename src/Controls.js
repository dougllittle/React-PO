import React, {Component} from 'react'
import './css/Controls.css'
import $ from 'jquery'

class FxRow extends Component{
	constructor() {
        super()
        this.state = {
            
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){

    }

    componentDidMount(){
    	const $dial = $(".dial");
    	const radius	= $dial.outerWidth() / 2;
		const center_x	= $dial.offset().left + radius;
		const center_y	= $dial.offset().top + radius;

		function get_degrees(mouse_x, mouse_y) {
			const radians	= Math.atan2(mouse_x - center_x, mouse_y - center_y);
			const degrees	= Math.round((radians * (180 / Math.PI) * -1) + 100);
			return degrees;
		}	

		$dial.each(function(){
			$(this).on('mousedown', function(event) {

				let $knob = $(this)

				// Calculate the mouse position in degrees
				const click_degrees = get_degrees(event.pageX, event.pageY);

				$(document).bind('mousemove', click_degrees, function(event) {

					// Calculate the mouse move position, removing starting point
					const degrees = get_degrees(event.pageX, event.pageY) - click_degrees;

					$knob.css('transform', 'rotate('+degrees+'deg)');
				});
			});
		})

		$(document).on('mouseup', function() {
			$(document).unbind('mousemove');
		});
    }

    render(){
    	return(
	    	<div className="po-row" id="po-controls-1">
	          <div className={["po-row-button", "po-fx"].join(" ")}>
	          	<button className="po-btn">Sound</button>
	          </div>
	          <div className={["po-row-button", "po-fx"].join(" ")}>
	          	<button className="po-btn">Pattern</button>
	          </div>
	          <div className={["po-row-button", "po-fx"].join(" ")}>
	          	<button className="po-btn">BPM</button>
	          </div>
	          <div className={["po-row-button", "po-fx", "po-knob"].join(" ")}>
	          	<button className={["po-btn", "dial"].join(" ")}><span className="hidden-visually">Knob A</span></button>
	          </div>
	          <div className={["po-row-button", "po-last", "po-fx", "po-knob"].join(" ")}>
	          	<button className={["po-btn", "dial"].join(" ")}><span className="hidden-visually">Knob B</span></button>
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

    }

    applyControls(ind){
    	var labels = ["Record", "FX", "Play", "Write"]
    	return labels[ind];
    }

    render(){
    	return(
	        <div className="po-row" data-numdex={this.props.numDex} id={this.props.id}>
	          <div className="po-row-button">
	          	<button className="po-btn">{1 + parseInt(this.props.numDex)}</button>
	          </div>
	          <div className="po-row-button">
	          	<button className="po-btn">{2 + parseInt(this.props.numDex)}</button>
	          </div>
	          <div className="po-row-button">
	          	<button className="po-btn">{3 + parseInt(this.props.numDex)}</button>
	          </div>
	          <div className="po-row-button">
	          	<button className="po-btn">{4 + parseInt(this.props.numDex)}</button>
	          </div>
	          <div className={["po-row-button", "po-last", "po-fx"].join(" ")}>
	          	<button className="po-btn">{this.applyControls(this.props.fxNum)}</button>
	          </div>
	        </div>
		)
    }

}

export {
	FxRow,
	ControlsRow,
}