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
            meetingURL: '',
            opBudgetSumURL: '',
            opBudgetDocURL: '',
            sewerRateURL: '',
            serviceFeeURL: '',
            lateralURL: '',
            constructionURL: '',
            standardDrawURL: '',
            developURL: '',
            impactURL: '',
            isAdmin: false
        }
        this.handleAgendaDrop = this.handleAgendaDrop.bind(this);
        this.onAgendaDrop = this.onAgendaDrop.bind(this);

        this.handleMeetingDrop = this.handleMeetingDrop.bind(this);
        this.onMeetingDrop = this.onMeetingDrop.bind(this)

        this.handleOpBudgetSumDrop = this.handleOpBudgetSumDrop.bind(this);
        this.onOpBudgetSumDrop = this.onOpBudgetSumDrop.bind(this);

        this.handleOpBudgetDocDrop = this.handleOpBudgetDocDrop.bind(this);
        this.onOpBudgetDocDrop = this.onOpBudgetDocDrop.bind(this);

        this.handleSewerRateDrop = this.handleSewerRateDrop.bind(this);
        this.onSewerRateDrop = this.onSewerRateDrop.bind(this);

        this.handleServiceFeeDrop = this.handleServiceFeeDrop.bind(this);
        this.onServiceFeeDrop = this.onServiceFeeDrop.bind(this);

        this.handleLateralDrop = this.handleLateralDrop.bind(this);
        this.onLateralDrop = this.onLateralDrop.bind(this);

        this.handleConstructionDrop = this.handleConstructionDrop.bind(this);
        this.onConstructionDrop = this.onConstructionDrop.bind(this);

        this.handleStandardDrawDrop = this.handleStandardDrawDrop.bind(this);
        this.onStandardDrawDrop = this.onStandardDrawDrop.bind(this);
        
        this.handleDevelopDrop = this.handleDevelopDrop.bind(this);
        this.onDevelopDrop = this.onDevelopDrop.bind(this);
        
        this.handleImpactDrop = this.handleImpactDrop.bind(this);
        this.onImpactDrop = this.onImpactDrop.bind(this);
    }

    componentWillMount() {
        axios.get('/auth/me').then(({ data }) => {
            this.setState({
                isAdmin: data
            })

        }).catch(e => { })
    }

    // Check admin
    adminCheck(bool) {
        this.setState({
            isAdmin: !this.state.admin
        })

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
            console.log("DONE")
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
            console.log("DONE")
            // ... perform after upload is successful operation
        });
    }

    // Handle OpBudget
    onOpBudgetSumDrop(files) {
        console.log(files)
        this.setState({
            files: files
        })
        this.handleOpBudgetSumDrop(files)
    }
    handleOpBudgetSumDrop = files => {
        const uploaders = files.map(file => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `Operation Budget One-Page-Summary`);
            formData.append("upload_preset", preset);
            formData.append("api_key", api_key);
            formData.append("timestamp", (Date.now() / 1000) | 0);

            return axios.post(url, formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;
                console.log(data.secure_url)
                this.setState({
                    opBudgetSumURL: data.secure_url
                })
                axios.put('/upload/opBudgetSum', {
                    opBudgetSumURL: this.state.opBudgetSumURL
                })
            })
        });
        // Once all the files are uploaded 
        axios.all(uploaders).then(() => {
            console.log("DONE")
            // ... perform after upload is successful operation
        });
    }
    // Handle OpBudget Doc
    onOpBudgetDocDrop(files) {
        console.log(files)
        this.setState({
            files: files
        })
        this.handleOpBudgetDocDrop(files)
    }
    handleOpBudgetDocDrop = files => {
        const uploaders = files.map(file => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `Operation Budget One-Page-Summary`);
            formData.append("upload_preset", preset);
            formData.append("api_key", api_key);
            formData.append("timestamp", (Date.now() / 1000) | 0);

            return axios.post(url, formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;
                console.log(data.secure_url)
                this.setState({
                    opBudgetDocURL: data.secure_url
                })
                axios.put('/upload/opBudgetDoc', {
                    opBudgetDocURL: this.state.opBudgetDocURL
                })
            })
        });
        // Once all the files are uploaded 
        axios.all(uploaders).then(() => {
            console.log("DONE")
            // ... perform after upload is successful operation
        });
    }
    // Handle Sewer Rate
    onSewerRateDrop(files) {
        console.log(files)
        this.setState({
            files: files
        })
        this.handleSewerRateDrop(files)
    }
    handleSewerRateDrop = files => {
        const uploaders = files.map(file => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `Sewer Rate Study`);
            formData.append("upload_preset", preset);
            formData.append("api_key", api_key);
            formData.append("timestamp", (Date.now() / 1000) | 0);

            return axios.post(url, formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;
                console.log(data.secure_url)
                this.setState({
                    sewerRateURL: data.secure_url
                })
                axios.put('/upload/sewerRate', {
                    sewerRateURL: this.state.sewerRateURL
                })
            })
        });
        // Once all the files are uploaded 
        axios.all(uploaders).then(() => {
            console.log("DONE")
            // ... perform after upload is successful operation
        });
    }
    // Handle Service Rate
    onServiceFeeDrop(files) {
        console.log(files)
        this.setState({
            files: files
        })
        this.handleServiceFeeDrop(files)
    }
    handleServiceFeeDrop = files => {
        const uploaders = files.map(file => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `Service Fee Resolution`);
            formData.append("upload_preset", preset);
            formData.append("api_key", api_key);
            formData.append("timestamp", (Date.now() / 1000) | 0);

            return axios.post(url, formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;
                console.log(data.secure_url)
                this.setState({
                    serviceFeeURL: data.secure_url
                })
                axios.put('/upload/serviceFee', {
                    serviceFeeURL: this.state.serviceFeeURL
                })
            })
        });
        // Once all the files are uploaded 
        axios.all(uploaders).then(() => {
            console.log("DONE")
            // ... perform after upload is successful operation
        });
    }
    // Handle Lateral
    onLateralDrop(files) {
        console.log(files)
        this.setState({
            files: files
        })
        this.handleLateralDrop(files)
    }
    handleLateralDrop = files => {
        const uploaders = files.map(file => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `Sewer Lateral`);
            formData.append("upload_preset", preset);
            formData.append("api_key", api_key);
            formData.append("timestamp", (Date.now() / 1000) | 0);

            return axios.post(url, formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;
                console.log(data.secure_url)
                this.setState({
                    lateralURL: data.secure_url
                })
                axios.put('/upload/lateral', {
                    lateralURL: this.state.lateralURL
                })
            })
        });
        // Once all the files are uploaded 
        axios.all(uploaders).then(() => {
            console.log("DONE")
            // ... perform after upload is successful operation
        });
    }
    // Handle Construction Spec
    onConstructionDrop(files) {
        console.log(files)
        this.setState({
            files: files
        })
        this.handleConstructionDrop(files)
    }
    handleConstructionDrop = files => {
        const uploaders = files.map(file => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `Sewer Lateral`);
            formData.append("upload_preset", preset);
            formData.append("api_key", api_key);
            formData.append("timestamp", (Date.now() / 1000) | 0);

            return axios.post(url, formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;
                console.log(data.secure_url)
                this.setState({
                    constructionURL: data.secure_url
                })
                axios.put('/upload/construction', {
                    constructionURL: this.state.constructionURL
                })
            })
        });
        // Once all the files are uploaded 
        axios.all(uploaders).then(() => {
            console.log("DONE")
            // ... perform after upload is successful operation
        });
    }
    // Handle Standard Drawings
    onStandardDrawDrop(files) {
        console.log(files)
        this.setState({
            files: files
        })
        this.handleStandardDrawDrop(files)
    }
    handleStandardDrawDrop = files => {
        const uploaders = files.map(file => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `Sewer Lateral`);
            formData.append("upload_preset", preset);
            formData.append("api_key", api_key);
            formData.append("timestamp", (Date.now() / 1000) | 0);

            return axios.post(url, formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;
                console.log(data.secure_url)
                this.setState({
                    standardDrawURL: data.secure_url
                })
                axios.put('/upload/standardDraw', {
                    standardDrawURL: this.state.standardDrawURL
                })
            })
        });
        // Once all the files are uploaded 
        axios.all(uploaders).then(() => {
            console.log("DONE")
            // ... perform after upload is successful operation
        });
    }
    // Handle Development Process
    onDevelopDrop(files) {
        console.log(files)
        this.setState({
            files: files
        })
        this.handleDevelopDrop(files)
    }
    handleDevelopDrop = files => {
        const uploaders = files.map(file => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `Sewer Lateral`);
            formData.append("upload_preset", preset);
            formData.append("api_key", api_key);
            formData.append("timestamp", (Date.now() / 1000) | 0);

            return axios.post(url, formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;
                console.log(data.secure_url)
                this.setState({
                    developURL: data.secure_url
                })
                axios.put('/upload/develop', {
                    developURL: this.state.developURL
                })
            })
        });
        // Once all the files are uploaded 
        axios.all(uploaders).then(() => {
            console.log("DONE")
            // ... perform after upload is successful operation
        });
    }
    // Handle Impact Fees
    onImpactDrop(files) {
        console.log(files)
        this.setState({
            files: files
        })
        this.handleImpactDrop(files)
    }
    handleImpactDrop = files => {
        const uploaders = files.map(file => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `Sewer Lateral`);
            formData.append("upload_preset", preset);
            formData.append("api_key", api_key);
            formData.append("timestamp", (Date.now() / 1000) | 0);

            return axios.post(url, formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;
                console.log(data.secure_url)
                this.setState({
                    impactURL: data.secure_url
                })
                axios.put('/upload/impact', {
                    impactURL: this.state.impactURL
                })
            })
        });
        // Once all the files are uploaded 
        axios.all(uploaders).then(() => {
            console.log("DONE")
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
                <a href={process.env.REACT_APP_LOGIN}><button className="LoginButton">Log In</button></a>
                <a href={process.env.REACT_APP_LOGOUT}><button className="LoginButton">Log Out</button></a>
                {this.state.isAdmin ?
                    <Dropzone
                        multiple={false}
                        accept="application/*"
                        onDrop={this.onAgendaDrop}
                        style={dropzoneStyle}>
                        <div>AGENDA, click here, or drag and drop a PDF.</div>
                    </Dropzone>
                    : null}
                {this.state.isAdmin ?
                    <Dropzone
                        multiple={false}
                        accept="application/*"
                        onDrop={this.onMeetingDrop}
                        style={dropzoneStyle}>
                        <div>MEETING SCHEDULE, click here, or drag and drop a PDF.</div>
                    </Dropzone>
                    : null}
                {this.state.isAdmin ?
                    <Dropzone
                        multiple={false}
                        accept="application/*"
                        onDrop={this.onOpBudgetSumDrop}
                        style={dropzoneStyle}>
                        <div>OPERATIONAL BUDGET SUM, click here, or drag and drop a PDF.</div>
                    </Dropzone>
                    : null}
                {this.state.isAdmin ?
                    <Dropzone
                        multiple={false}
                        accept="application/*"
                        onDrop={this.onOpBudgetDocDrop}
                        style={dropzoneStyle}>
                        <div>OPERATIONAL BUDGET DOC, click here, or drag and drop a PDF.</div>
                    </Dropzone>
                    : null}
                {this.state.isAdmin ?
                    <Dropzone
                        multiple={false}
                        accept="application/*"
                        onDrop={this.onSewerRateDrop}
                        style={dropzoneStyle}>
                        <div>SEWER RATE STUDY, click here, or drag and drop a PDF.</div>
                    </Dropzone>
                    : null}
                {this.state.isAdmin ?
                    <Dropzone
                        multiple={false}
                        accept="application/*"
                        onDrop={this.onServiceFeeDrop}
                        style={dropzoneStyle}>
                        <div>SERVICE FEE RESOLUTION, click here, or drag and drop a PDF.</div>
                    </Dropzone>
                    : null}
                {this.state.isAdmin ?
                    <Dropzone
                        multiple={false}
                        accept="application/*"
                        onDrop={this.onLateralDrop}
                        style={dropzoneStyle}>
                        <div>SEWER LATERAL, click here, or drag and drop a PDF.</div>
                    </Dropzone>
                    : null}
                {this.state.isAdmin ?
                    <Dropzone
                        multiple={false}
                        accept="application/*"
                        onDrop={this.onConstructionDrop}
                        style={dropzoneStyle}>
                        <div>DESIGN STANDARDS & CONSTRUCTION SPEC, click here, or drag and drop a PDF.</div>
                    </Dropzone>
                    : null}
                {this.state.isAdmin ?
                    <Dropzone
                        multiple={false}
                        accept="application/*"
                        onDrop={this.onStandardDrawDrop}
                        style={dropzoneStyle}>
                        <div>STANDARD DRAWINGS, click here, or drag and drop a PDF.</div>
                    </Dropzone>
                    : null}
                {this.state.isAdmin ?
                    <Dropzone
                        multiple={false}
                        accept="application/*"
                        onDrop={this.onDevelopDrop}
                        style={dropzoneStyle}>
                        <div>DEVELOPMENT PROCESS, click here, or drag and drop a PDF.</div>
                    </Dropzone>
                    : null}
                {this.state.isAdmin ?
                    <Dropzone
                        multiple={false}
                        accept="application/*"
                        onDrop={this.onImpactDrop}
                        style={dropzoneStyle}>
                        <div>IMPACT FEES, click here, or drag and drop a PDF.</div>
                    </Dropzone>
                    : null}

            </div>
        )
    }

}

export default fileDrop