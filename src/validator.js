function validator( state ) {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let formData = Object.assign({}, state);
    delete formData.message;

    let result = Object.assign({}, formData.validation);
    delete formData.validation;

    
    if ( formData.username && formData.username.length >= 3 ) {
        fetch(`api/users/${formData.username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if ( data._id ) {
                result.username.status = 'err';
                result.username.valid = false;
                result.username.exists = true;
                result.username.msg = 'unique username is required';
            } else {
                result.username.status = 'match';
                result.username.valid = true;
                result.username.exists = false;
                result.username.msg = '';
            }
        })
        .catch(console.error)
        
    } else {
        result.username.status = 'err';
        result.username.valid = false;
        result.username.msg = 'unique username must be more than 3 characters';
    }
    
    if( formData.email ) {
        if ( formData.email.match(regex) ) {
            result.email.status = 'match';
            result.email.valid = true;
            result.email.msg = '';
        } else {
            result.email.status = 'err';
            result.email.valid = false;
            result.email.msg = 'valid email address is required';
        }
        
    } else {
        result.email.status = 'err';
        result.email.valid = false;
        result.email.msg = 'valid email address is required'
    }

    if ( formData.password && formData.password.length >= 8) {
        result.password.status = 'match';
        result.password.valid = true;
        result.password.msg = '';
    } else {
        result.password.status = 'err';
        result.password.valid = false;
        result.password.msg = 'password must be 8 characters or more';
    }

    if ( formData.passwordConf ) {
        if ( formData.passwordConf === formData.password ) {
            result.passwordConf.status = 'match';
            result.passwordConf.valid = true;
            result.passwordConf.msg = '';
        } else {
            result.passwordConf.status = 'err';
            result.passwordConf.valid = false;
            result.passwordConf.msg = 'passwords do not match';
        }
        
    } else {
        result.passwordConf.status = 'err';
        result.passwordConf.valid = false;
        result.passwordConf.msg = 'password confirmation is required';
    }

    return result;
    
}

export default validator;