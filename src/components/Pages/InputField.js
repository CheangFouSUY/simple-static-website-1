import React, { Component } from 'react'

class InputField extends Component {
    render(){
        return(
            <div className="control-group">
                <div className="form-group floating-label-form-group controls mt-2 pb-2">
                    <input className="form-control" id={this.props.name} type={this.props.type} placeholder={this.props.placeholder} required="required" data-validation-required-message="Please enter your name." />
                    <p className="help-block text-danger"></p>
                </div>
            </div>
       )
    };
}

export default InputField;