import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateRequest extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleWorkerChange = this.handleWorkerChange.bind(this);
        this.handleApprovedChange = this.handleApprovedChange.bind(this);
        this.handleRequestStartChange = this.handleRequestStartChange.bind(this);
        this.handleRequestEndChange = this.handleRequestEndChange.bind(this);

        this.state = {
            Request_description: '',
            Request_worker: '',
            Request_approved: false,
            Request_start: new Date(),
            Request_end: new Date()
        }
    }

    handleDescriptionChange(e){
        this.setState({
            Request_description: e.target.value
        })
    }

    handleWorkerChange(e){
        this.setState({
            Request_worker: e.target.value
        })
    }

    handleApprovedChange(e){
        this.setState({
            Request_approved: e.target.value
        })
    }

    handleRequestStartChange(date){
        this.setState({
            Request_start: date
        })
    }

    handleRequestEndChange(date){
        this.setState({
            Request_end: date
        })
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state)
    }
    
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New PTO Request</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Request_description}
                                onChange={this.handleDescriptionChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Worker: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.Request_worker}
                            onChange={this.handleWorkerChange}
                        />
                    </div>
                    <div className="form-row">
                        <div className="col-6">
                            <label>Start Date: </label>
                            <br/>
                            <DatePicker
                                selected={this.state.Request_start}
                                onChange={this.handleRequestStartChange}
                            />
                        </div>
                        <div className="col-6">
                            <label>End Date: </label>
                            <br/>
                            <DatePicker
                                selected={this.state.Request_end}
                                onChange={this.handleRequestEndChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Submit Request" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}