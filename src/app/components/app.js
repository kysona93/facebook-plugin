import React from 'react';
import Navigation from './shared_component/navigation/navigation';
import './app.css';

export default class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div>
                    <Navigation />
                </div>
                <div className="custome-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}



