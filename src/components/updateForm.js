import React, { Component } from 'react';
import Button from './button';
import InputField from './inputField';
import '../css/forms.css';
import '../css/global.css';

class UpdateForm extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.isValid = this.isValid.bind(this);
        this.state = {
            title: '',
            status: '',
            medium: '',
            subject: '',
            type: '',
            size: '',
            orientation: '',
            price: '',
            url: this.props.url
        }
    }

    handleChange(value, name){
        this.setState({
            [name] : value     
        });
    }

    isValid(valid){
        return valid;
    }

    handleClick(e){
        e.preventDefault();

        if(validate(this.state)){
            this.submitForm(this.state);
        } else {
            this.props.showMessage({message: "All fields required", messageType: "error"});
        }
        
    }

    submitForm(data){
        fetch('api/addnew', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if ( response.status === 200 ) {
                this.messageType = 'success';
                this.props.showMessage({message: `${this.state.title} was updated successfully`, messageType: 'success'});
                this.props.toggleForm();
            }
        })
       
    }

    populateFields(data){

    }

    render(){

        return(
            
            <div className="form-wrapper add-new-form-wrapper clearfix">
				<form className="form add-new">
                    <InputField 
                        className="input input_text add-new"
                        id="title"
                        type="text"
                        name="title"
                        label="Enter Artwork Title"
                        handleInputChange = {this.handleChange}
                        value = {hasValue(this.state, 'title')}
                        isValid = {this.isValid}
                    />
                    <InputField 
                        className="input input_text add-new"
                        id="status"
                        type="text"
                        name="status"
                        label="Enter Current Status"
                        handleInputChange = {this.handleChange}
                        value = {hasValue(this.state, 'status')}
                        isValid = {this.isValid}
                    />
                    <InputField 
                        className="input input_text add-new"
                        id="medium"
                        type="text"
                        name="medium"
                        label="Enter Medium Type"
                        handleInputChange = {this.handleChange}
                        value = {hasValue(this.state, 'medium')}
                        isValid = {this.isValid}
                    />
                    <InputField 
                        className="input input_text add-new"
                        id="subject"
                        type="text"
                        name="subject"
                        label="Enter subject name"
                        handleInputChange = {this.handleChange}
                        value = {hasValue(this.state, 'subject')}
                        isValid = {this.isValid}
                    />
                    <InputField 
                        className="input input_text add-new"
                        id="type"
                        type="text"
                        name="type"
                        label="Enter artwork type"
                        handleInputChange = {this.handleChange}
                        value = {hasValue(this.state, 'type')}
                        isValid = {this.isValid}
                    />
                    <InputField 
                        className="input input_text add-new"
                        id="size"
                        type="text"
                        name="size"
                        label="Enter artwork size"
                        handleInputChange = {this.handleChange}
                        value = {hasValue(this.state, 'size')}
                        isValid = {this.isValid}
                    />
                    <InputField 
                        className="input input_text add-new"
                        id="orientation"
                        type="text"
                        name="orientation"
                        label="Enter the artwork orientation"
                        handleInputChange = {this.handleChange}
                        value = {hasValue(this.state, 'orientation')}
                        isValid = {this.isValid}
                    />
                    <InputField 
                        className="input input_text add-new"
                        id="price"
                        type="number"
                        name="price"
                        label="Enter the artwork price"
                        handleInputChange = {this.handleChange}
                        value = {hasValue(this.state, 'price')}
                        isValid = {this.isValid}
                    />
                    <InputField 
                        id="url"
                        type="hidden"
                        name="url"
                        handleInputChange = {this.handleChange}
                        value = {this.props.url}
                        isValid = {this.isValid}
                    />
					<Button onClick={this.handleClick} title={this.props.submitTitle} className="button form-submit" />
				</form>
            
            </div>
        );
    }
}

function hasValue(state, name){
    if(state && state.hasOwnProperty(name)){
        return state[name];
    } else {
        return '';
    }
}

function validate(state){
    const newState = Object.assign({}, state);
    delete newState.message;

    for (let i in newState){
        console.log(newState[i]);
        if(!newState[i]){
            return false;
        }
    }

    return true;
}

export default UpdateForm;