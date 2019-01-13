import React from 'react';
import '../css/input.css';

function InputField(props){

    
    function handleChange(e){
        props.handleInputChange(e.target.value, e.target.name);
    }

    return(
        <fieldset className="fieldset">
            { props.label && 
                <label className="label" htmlFor={props.name}>{props.label}:</label> }
                { props.exists && 
                    <span id="exists" className="exists">Username exists</span> }
            <div className="input-wrapper">
                <input className={`${props.className} ${props.status}`} 
                    id={props.id} 
                    type={props.type} 
                    name={props.name} 
                    placeholder={props.placeholder} 
                    onChange={handleChange}
                    onBlur = {props.validate}
                    value = {props.value}
                    autoComplete = {props.autoComplete}
                    />
            </div>
        </fieldset>
    );
    
}

export default InputField;