import React, { Component } from 'react';
import Accounts from './accounts';
import { browserHistory } from 'react-router-dom';

class Header extends Component {

    onBinClick(event) {
        event.preventDefault();
        Meteor.call('bins.insert', (error, bin) => {
            browserHistory.push(`/bin/${binId}`);
        });
    }

    render() {
        return (
            <nav className="nav navbar-default">
                <div className="navbar-header">
                    <a href="/" className="navbar-brand">Markbin</a>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <Accounts/>
                    </li>
                    <li>
                        <a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;