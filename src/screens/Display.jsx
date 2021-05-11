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
        const finalArray = this.props.finalArray;
        const match = this.props.match;

        const index = parseInt(match.params.index, 10);

        return (
            <div>
                <h1>{finalArray[index].title}</h1>
                <p>{finalArray[index].code}</p>
            </div>
        );
    }
}

export default withRouter(Display);