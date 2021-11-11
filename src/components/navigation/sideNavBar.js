import React from 'react';
import Category from './category';
import './nav.css';

class SideNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="navBar">
                <ul className="categoryList">
                    <li><Category name="Category 1" /></li>
                    <li><Category name="Category 2" /></li>
                    <li><Category name="Category 3" /></li>
                    <li><Category name="Category 4" /></li>
                </ul>
            </div>
        );
    }
}

export default SideNavBar;