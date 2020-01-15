import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class RequestList extends Component {
    render() {
        return (
            <table className="table table-dark">
            	<thead>
            		<tr>
            			<th>
            			<Link to="/edit/0?foo=bar">ID</Link>
            			</th>
            			<th>STATUS</th>
            			<th>WORKER</th>
            			<th>DESCRIPTION</th>
            			<th>START DATE</th>
            			<th>END DATE</th>
            		</tr>
            	</thead>
            </table>
        )
    }
}