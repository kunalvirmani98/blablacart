import React from 'react';
import Product from './product';
import './content.css';

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsInCart: {},
        };
    }

    render() {
        return (
            <div className="content">
                <h2>Products under <bold>Category 1</bold></h2>
                <div className="product-container">
                    <Product title="Onetwoplus 32 inch Full-HD TV" />
                </div>
            </div>
        );
    }
}

export default MainContent;