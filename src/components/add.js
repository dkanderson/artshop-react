import React, { Component } from 'react';
import UpdateForm from './updateForm';
import UploadFile from './uploadFile';
import Message from './message';

class AddNew extends Component{
    constructor(props){
        super(props);
        this.state = {
            fileUploaded: false,
            showMessage: false,
            showForm: false,
            url: ''
        }
        this.fileStatusChange = this.fileStatusChange.bind(this);
        this.hideForm = this.hideForm.bind(this);
        this.toggleMessage = this.toggleMessage.bind(this);
    }
    fileStatusChange(url, uploaded) {
        if(uploaded){
            this.setState({
                fileUploaded: true,
                showForm: true,
                url,
                showMessage: false,
                mesage: {}
            })
        }
    }

    toggleMessage(message){
        console.log(message);
        if (message) {
            this.setState({
                message,
                showMessage: true
            })
        } else {
            this.setState({
                showMessage: false
            })
        }
        
    }

    hideForm(){
        this.setState({
            showForm: false
        })
    }

    render(){
        return(
            <div>
                <h2 className="heading heading_two add-new">Add a new piece of art work</h2>
                <UploadFile setUrl={this.fileStatusChange} showMessage={this.toggleMessage} />
                { this.state.showMessage && 
                    <Message message={this.state.message.message} messageType={this.state.message.messageType} /> }
                { this.state.showForm && 
                    <UpdateForm 
                        submitTitle="add new" 
                        mode="add" 
                        url = {this.state.url} 
                        toggleForm={this.hideForm} 
                        showMessage={this.toggleMessage} /> }
            </div>
        );
    }
}

export default AddNew; 