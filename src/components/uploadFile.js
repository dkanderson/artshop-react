import React from 'react';
import '../css/forms.css';

function UploadFile(props){
   
    function handleFileUpload(e){
        e.preventDefault();
        const fileData = new FormData();
        
        let artworkFile = document.getElementById('artworkFile').files[0];
        
        
        if(!artworkFile){
            props.showMessage({message: "No file was selected", messageType: "error"});
        } else {
            fileData.append("artwork", artworkFile);
            fetch('api/upload', {
                method: 'POST',
                body: fileData
            })
            .then((response) => {
                if( response.status === 200 ) {
                    props.setUrl(artworkFile.name, true);
                }
            })
            .catch ((error) => {
                console.error(error);
            });
        }

    }
    
    return(
        <div className="form-wrapper">
            <form className="form upload">
                <input id="artworkFile" className="input input-file input-upload-artwork" name="artwork" type="file" />
                <button className="button button-upload-file button-upload-artwork" onClick={handleFileUpload}>upload</button>
            </form>
        </div>
    );
    

}

export default UploadFile;