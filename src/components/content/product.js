import React from 'react';
import { appContext } from '../../themeContext';
import prodImage from './lcd.jpg';

class Product extends React.Component {
    static contextType = appContext;
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.context);
        return (
            <div className="card">
                <img src={prodImage} alt="prod" className="product-image" />
                <p style={{ fontWeight: "bold" }}>{this.props.title}</p>
                <button className="btn darkBtn" style={{ width: "50%" }} onClick={this.context.contextUpdater}>ADD TO CART</button>
            </div>
        );
    }
}

export default Product;