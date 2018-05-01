import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
// import request from 'superagent';
// import sha1 from 'sha1'

const preset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
const url = process.env.REACT_APP_CLOUDINARY_UPLOAD_URL;
const api_key = process.env.REACT_APP_API_KEY;

class fileDrop extends Component {
    constructor() {
        super();
        this.state = {
            uploadURL: ''
        }
        this.handleDrop = this.handleDrop.bind(this);
    }

    onImageDrop(files) {
        console.log(files)
        this.setState({
            files: files
        })
        this.handleDrop(files)
    }
    handleDrop = files => {
        const uploaders = files.map(file => {
            // Initial FormData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `The_File_You_Selected`);
            formData.append("upload_preset", preset); // Replace the preset name with your own
            formData.append("api_key", api_key); // Replace API key with your own Cloudinary key
            formData.append("timestamp", (Date.now() / 1000) | 0);

            // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
            return axios.post(url, formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;

                this.setState({
                    uploadURL: data.secure_url
                })
                console.log(this.state.uploadURL)
                axios.put('/upload/agenda', {
                    uploadURL: this.state.uploadURL
                })

            })
        });

        // Once all the files are uploaded 
        axios.all(uploaders).then(() => {
            // ... perform after upload is successful operation
        });
    }



    render() {
        const dropzoneStyle = {
            width: "50%",
            border: "3px dashed #cdcdcd",
            align: "center",
            margin: "1vw auto",
            padding: "1vw",
            borderRadius: "1vw",
            cursor: "pointer"
        };

        return (
            <div className="imagePreview_main">
                <Dropzone
                    multiple={false}
                    accept="application/*"
                    onDrop={this.onImageDrop.bind(this)}
                    style={dropzoneStyle}>
                    <div>To upload, click here, or drag an drop and image.</div>
                </Dropzone>


            </div>
        )
    }

}

export default fileDrop