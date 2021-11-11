import React from 'react';
import prodImage from '../content/lcd.jpg';

class CartProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="d-flex cartProduct">
                <div className="d-flex" style={{ justifyContent: "center", alignItems: "center" }}>
                    <img src={prodImage} alt="prod" width="50px" height="50px" />
                </div>
                <div style={{ paddingLeft: "1rem", paddingRight: "2rem" }}>
                    <h4>{this.props.name}</h4>
                    <div className="d-flex" style={{ justifyContent: 'space-between', minWidth: "200px" }}>
                        <p>Quantity: <strong>{this.props.quantity}</strong></p>
                        <button className="btn" style={{ fontSize: "0.9rem" }}>Remove</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartProduct;