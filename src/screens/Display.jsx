/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from 'react';
import { withRouter } from 'react-router-dom';

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const match = this.props.match;
        const index = parseInt(match.params.index, 10);

        const finalArray = localStorage.getItem('finalArray');
        const parsed = JSON.parse(finalArray);

        return (
            <div>
                <h1>{parsed[index].title}</h1>
                <p>{parsed[index].code}</p>
            </div>
        );
    }
}

export default withRouter(Display);
