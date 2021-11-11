import React from 'react';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="category">
                <p style={{ fontWeight: "bold" }}>{this.props.name}</p>
            </div>
        );
    }
}

export default Category;