import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';


const preset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
const url = process.env.REACT_APP_CLOUDINARY_UPLOAD_URL;
const api_key = process.env.REACT_APP_API_KEY;

class fileDrop extends Component {
    constructor() {
        super();
        this.state = {
            agendaURL: '',
            meeting: ''
        }
        this.handleAgendaDrop = this.handleAgendaDrop.bind(this);
        this.onAgendaDrop = this.onAgendaDrop.bind(this);
        this.handleMeetingDrop = this.handleMeetingDrop.bind(this);
        this.onMeetingDrop = this.onMeetingDrop.bind(this)
    }
// Handle agenda
    onAgendaDrop(files) {
        console.log(files)
        this.setState({
            files: files
        })
        this.handleAgendaDrop(files)
    }
    handleAgendaDrop = files => {
        const uploaders = files.map(file => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `Agenda`);
            formData.append("upload_preset", preset); 
            formData.append("api_key", api_key); 
            formData.append("timestamp", (Date.now() / 1000) | 0);

            return axios.post(url, formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;

                this.setState({
                    agendaURL: data.secure_url
                })
                axios.put('/upload/agenda', {
                    agendaURL: this.state.agendaURL
                })
            })
        });
        // Once all the files are uploaded 
        axios.all(uploaders).then(() => {
            // ... perform after upload is successful operation
        });
    }

// Handle meeting
    onMeetingDrop(files) {
        console.log(files)
        this.setState({
            files: files
        })
        this.handleMeetingDrop(files)
    }
    handleMeetingDrop = files => {
        const uploaders = files.map(file => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `Meeting Schedule`);
            formData.append("upload_preset", preset); 
            formData.append("api_key", api_key); 
            formData.append("timestamp", (Date.now() / 1000) | 0);

            return axios.post(url, formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;
console.log(data.secure_url)
                this.setState({
                    meetingURL: data.secure_url
                })
                axios.put('/upload/meeting', {
                    meetingURL: this.state.meetingURL
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
                    onDrop={this.onAgendaDrop}
                    style={dropzoneStyle}>
                    <div>AGENDA, click here, or drag and drop a PDF.</div>
                </Dropzone>
                <Dropzone
                    multiple={false}
                    accept="application/*"
                    onDrop={this.onMeetingDrop}
                    style={dropzoneStyle}>
                    <div>MEETING SCHEDULE, click here, or drag and drop a PDF.</div>
                </Dropzone>


            </div>
        )
    }

}

export default fileDrop