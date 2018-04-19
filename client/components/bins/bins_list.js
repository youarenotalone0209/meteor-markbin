import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';

class BinsList extends Component {
    onBinRemove(bin) {
        Meteor.call('bins.remove', bin);
    }

    renderList() {
        console.log(this.props.bins);
        //We only want to call onBinRemove only when we pass it a correct bin
        //if using onClick={this.onBinRemove(bin)} then when we render this list of bins this method
        //would be instantly called instantly
        return this.props.bins.map(bin => {
            return  (
                <li className="list-group-item" key={bin._id}>
                    Bin {bin._id}
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

export default createContainer(() => {
    Meteor.subscribe('bins');
    // this bins will be provided as a prop to our react component
    // Bin.find() here doesn't return us all data, but only the data that Meteor
    // provides us from the subscription
    return { bins: Bins.find({}).fetch() };
}, BinsList);