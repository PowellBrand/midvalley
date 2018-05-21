import React, { Component } from 'react';
import axios from 'axios';
class Contractors extends Component {
    constructor(props) {
        super(props)
        this.state = {
            construction: '',
            standard: '',
            development: '',
            impact: ''
        }

    }
    componentDidMount() {
        axios.get('/construction')
            .then((resp) => {
                this.setState({
                    construction: resp.data[0].construction

                })
            })

    }

    render() {
        return (
            <div className="mainBody">
                <div className="p-div">
                    <h1>CONTRACTORS</h1>
                    <p>
                        Midvalley Improvement Distric has approved Design Standards and Construction Specifications, detailed drawings, general design and construction processes, and required impact fees. The following are available to download:
                    </p>
                    <a href={this.state.conSpec} target="_blank">Design Standards and Construction Specifications</a> <br />
                </div>
            </div>
        )
    }
}
export default Contractors
