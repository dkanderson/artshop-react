import React, { Component } from 'react';
import Artlist from './artlist';
import Message from './message';
import UpdateForm from './updateForm';
import '../css/global.css';

class EditArtwork extends Component{
    constructor(props){
        super(props);
        this.state = {
            showForm: false,
            showMessage: false,
            editKey: ''
        }
        this.handleEditRequest = this.handleEditRequest.bind(this);
        this.toggleMessage = this.toggleMessage.bind(this);
        this.hideForm = this.hideForm.bind(this);
    }
    handleEditRequest(title){
        this.setState({
            editKey: title,
            showForm: true
        })
    }

    toggleMessage(message){

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
            <div className="edit-wrapper">
                { this.state.showMessage && 
                    <Message 
                        message = {this.state.message.message} 
                        messageType = {this.state.message.messageType} 
                    /> }
                <Artlist mode = "edit" triggerEdit = {this.handleEditRequest} />
                { this.state.showForm && <UpdateForm 
                        submitTitle = "update" 
                        mode = "edit" 
                        url = {this.state.url} 
                        toggleForm = {this.hideForm} 
                        showMessage = { this.toggleMessage } 
                        editKey = {this.state.editKey }
                        /> }
            </div>
        );
    }
}

export default EditArtwork;