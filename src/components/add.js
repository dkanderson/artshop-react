import React, { Component } from 'react';
import UpdateForm from './updateForm';

class AddNew extends Component{
    render(){
        const url = '';
        return(
            <div>
                <h2 className="heading heading_two add-new">Add a new piece of art work</h2>
                <UpdateForm submitTitle="add new" mode="add" data = {url} />
            </div>
        );
    }
}

export default AddNew; 