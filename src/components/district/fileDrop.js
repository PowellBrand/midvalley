import React, { Component } from 'react';
import axios from 'axios';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'dc83eutiq';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dc83eutiq/image/upload'

class fileDrop extends Component {
    constructor(props){
        super(props)

        uploadedFileCloudinaryUrl: ''   
    }

    // handleUploadFile = (event) => {
    //     const data = new FormData();
    //     data.append('file', event.target.files[0]);
    //     data.append('name', 'file name');
    //     data.append('description', 'short description of the file');
    //     axios.post('/agenda', data).then((response) => {
    //         console.log(response);
    //     })
    // }
    handleFileUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url
                });
            }
        });
    }
  

    render() {
        return (
            <div>
                <form methods="post">
                    <input type="file" onChange={this.handleFileUpload} />
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }

}
export default fileDrop