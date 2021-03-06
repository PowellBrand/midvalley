import React, { Component } from 'react';
import axios from 'axios';



class District extends Component {
    constructor(props) {
        super(props)
        this.state = {
            agenda: '',
            meeting: '',
            budget_sum: '',
            budget_doc: '',
            sewer: '',
            serviceFee: '',
            lateral: ''
        }

    }
    componentDidMount() {
        axios.get('/agenda')
            .then((resp) => {

                this.setState({
                    agenda: resp.data[0].agenda
                })
            })
        axios.get('/meeting')
            .then((resp) => {
                this.setState({
                    meeting: resp.data[0].meeting_schedule
                })
            })
        axios.get('/opBudgetSum')
            .then((resp) => {
                this.setState({
                    budget_sum: resp.data[0].budget_summary
                })
            })
        axios.get('/opBudgetDoc')
            .then((resp) => {
                this.setState({
                    budget_doc: resp.data[0].budget_document
                })
            })
        axios.get('/sewerRate')
        .then((resp)=> {
            this.setState({
                sewer: resp.data[0].sewer_rate
            })
        })
        axios.get('/serviceFee')
        .then((resp)=> {
            this.setState({
                serviceFee: resp.data[0].service_fee
            })
        })
        axios.get('/lateral')
        .then((resp)=> {
            this.setState({
                lateral: resp.data[0].sewer_lateral
            })
        })
    }

    render() {
        return (
            <div>
                <div className="p-div">
                    <h1 className="hDiv">OUR HISTORY</h1><br /><br />
                    <p>
                        The Midvalley Improvement District (District) is a Special District operating in the Midvale City and north Sandy City areas of Salt Lake County, Utah (see map at the lower left). The District was organized on May 17, 1947, as the Salt Lake City Suburban Sanitary District No. 2, for the purpose of constructing and maintaining the area's sewer system. On March 9, 2005, the District adopted a resolution changing the name of the District from the Salt Lake City Suburban Sanitary District No. 2 to the Midvalley Improvement District.<br /><br />
                        The District is a separate legal entity with three members on the Board of Trustees. The Board of Trustees is elected by the public and has decision making authority, the authority to levy taxes, the power to designate management, the ability to significantly influence operations, and primary accountability for fiscal matters.<br /><br />
                        Meetings of the Board of Trustees are held on the second Wednesday of each month at Noon at the District office. The meetings are open to the public.
                    </p>
                    <a href={this.state.agenda} target="_blank">AGENDA</a> <br />
                    <a href={this.state.meeting} target="_blank">MEETING</a> <br />
                    <a href={this.state.budget_sum} target="_blank">OPERATION BUDGET-ONE PAGE SUMMARY</a> <br />
                    <a href={this.state.budget_doc} target="_blank">OPERATION BUDGET DOCUMENT</a> <br />
                    <a href={this.state.sewer} target="_blank">SEWER RATE STUDY</a> <br />
                    <a href={this.state.serviceFee} target="_blank">SERVICE FEE RESOLUTION</a> <br />
                    <a href={this.state.lateral} target="_blank">WHAT IS A SEWER LATERAL?</a> <br />
                </div>
            </div>
        )
    }
}
export default District