import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './screens/Home';
import Display from './screens/Display';

class Pastebinclone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        const finalArray = localStorage.getItem('finalArray');
        if (finalArray === null) {
            const emptyArr = [];
            const stringify = JSON.stringify(emptyArr);
            localStorage.setItem('finalArray', stringify);
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/:index" exact component={() => <Display />} />
                </Switch>
            </BrowserRouter>
        );
    }
}

render(<Pastebinclone />, document.getElementById('root'));
