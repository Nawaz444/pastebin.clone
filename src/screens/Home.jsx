/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            title: '',
        };
        this.addNew = this.addNew.bind(this);
    }

    addNew() {
        const { finalArray, setFinalArray } = this.props;
        const { code, title } = this.state;

        finalArray.push({ code, title });
        setFinalArray(finalArray);

        const history = this.props.history;
        history.push(`/${finalArray.length - 1}`);
    }

    render() {
        return (
            <div>
                <textarea
                    placeholder="Enter Code"
                    rows="19"
                    cols="50"
                    onChange={(event) => this.setState((prev) => ({
                        code: event.target.value,
                        title: prev.title,
                    }))}
                />
                <input
                    type="text"
                    placeholder="Enter Title"
                    onChange={(event) => this.setState((prev) => ({
                        code: prev.code,
                        title: event.target.value,
                    }))}
                />
                <button type="button" onClick={this.addNew}>Create New Paste</button>
            </div>
        );
    }
}

export default withRouter(Home);
