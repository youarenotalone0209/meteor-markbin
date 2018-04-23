import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Bins } from '../../../imports/collections/bins';

class BinsList extends Component {
    onBinRemove(bin) {
        Meteor.call('bins.remove', bin);
    }

    renderList() {
        //We only want to call onBinRemove only when we pass it a correct bin
        //if using onClick={this.onBinRemove(bin)} then when we render this list of bins this method
        //would be instantly called instantly
        return this.props.bins.map(bin => {
            const url = `/bins/${bin._id}`;

            return  (
                <li className="list-group-item" key={bin._id}>
                    <Link to={url}>Bin {bin._id}</Link>
                    <span className="pull-right">
                        <button
                            className="btn btn-danger"
                            onClick={() => this.onBinRemove(bin)}>
                            Remove
                        </button>
                    </span>
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group">
                {this.renderList()}
            </ul>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('bins');
    // this bins will be provided as a prop to our react component
    // Bin.find() here doesn't return us all data, but only the data that Meteor
    // provides us from the subscription
    return { bins: Bins.find({}).fetch() };
})(BinsList);