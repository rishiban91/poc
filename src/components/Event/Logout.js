import React, { Component } from 'react';

export default class Logout extends Component {

    logout = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                {this.logout()}

            </div>
        );

    }
}
