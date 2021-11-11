import React from 'react';
import './header.css';
import User from './user';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="header">
                <h1 className="logo text-primary">BlaBlaCart</h1>
                <User />
            </div>
        );
    }
}

export default Header;