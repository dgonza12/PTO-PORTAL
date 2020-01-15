import React, { Component } from 'react';
import {
  useParams
} from "react-router-dom";

export default class EditRequest extends Component {

    render() {
    	const { id } = this.props.match.params;
    	const params = new URLSearchParams(this.props.location.search);
    	const foo = params.get('foo');

        return (
            <div>
                <p>{id} {foo}</p>
            </div>
        )
    }
}