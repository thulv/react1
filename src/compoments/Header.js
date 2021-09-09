import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="page-header">
                <div className="page-title">
                    <h3>Dashboard <small>Welcome Eugene. 12 hours since last visit</small>
                    </h3>
                </div>
            </div>
        );
    }
}

export default Header;