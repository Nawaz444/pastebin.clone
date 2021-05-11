import React from 'react'; 
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './screens/Home';
import Display from './screens/Display';


class Pastebinclone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            finalArray: [],
        };
        this.setFinalArray = this.setFinalArray.bind(this);
    }

    setFinalArray(arr) {
        this.setState({ finalArray: arr });
    }

    render() {
        const { finalArray } = this.state;
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={() => <Home finalArray={finalArray} setFinalArray={this.setFinalArray} />} />
                    <Route path="/:index" component={() => <Display finalArray={finalArray} setFinalArray={this.setFinalArray} />} />
                </Switch>
            </BrowserRouter>
        );
    }
}

render(<Pastebinclone/>, document.getElementById('root'));
