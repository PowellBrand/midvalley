import React, { Component } from 'react';
import axios from 'axios';

class fileDrop extends Component {
    handleUploadFile = (event) => {
        const data = new FormData();
        data.append('file', event.target.files[0]);
        data.append('name', 'file name');
        data.append('description', 'short description of the file');
        axios.post('/files', data).then((response) => {
            console.log(response);
        })
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.handleUploadFile} />
            </div>
        )
    }

}
export default fileDrop