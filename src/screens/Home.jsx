/* eslint-disable import/no-unresolved */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { withRouter } from 'react-router-dom';
import photo from 'url:../../assets/photo.png';

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
        const { code, title } = this.state;

        const finalArray = localStorage.getItem('finalArray');
        const parsedArray = JSON.parse(finalArray);

        parsedArray.push({ code, title });

        const stringify = JSON.stringify(parsedArray);
        localStorage.setItem('finalArray', stringify);

        const history = this.props.history;
        history.push(`/${parsedArray.length - 1}`);
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
                <img src={photo} alt="My Profile" />
            </div>
        );
    }
}

export default withRouter(Home);
