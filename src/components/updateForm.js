import React, { Component } from 'react';
import Button from './button';
import InputField from './inputField';
import '../css/forms.css';

class UpdateForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }

    handleSubmit(e){
        e.preventDefault();

    }

    populateFields(data){

    }

    render(){
        return(
            <div className="form-wrapper add-new-form-wrapper">
				<form className="form add-new">
                    <InputField 
                        className="input input_text add-new"
                        id="title"
                        type="text"
                        name="title"
                    />
					<input className="input input_hidden add-new" id="url" type="hidden" name="url" />
					<Button onClick={this.handleClick} title={this.props.title} />
				</form>
			</div>
        );
    }
}

export default UpdateForm;