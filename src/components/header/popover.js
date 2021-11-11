import { Popover } from 'react-tiny-popover';
import React from 'react';
import CartProduct from './cartProduct';

class CartPopover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        let isPopoverOpen = this.props.isPopoverOpen;
        return (
            <Popover
                isOpen={isPopoverOpen}
                positions={['bottom']} // preferred positions by priority
                content={
                    <ul style={{ listStyle: "none", marginRight: "1.5rem" }}>
                        < CartProduct name={"OneTwoPlus 32 inch LCD"} quantity={2} />
                        < CartProduct name={"Redchili Phone"} quantity={2} />
                        < CartProduct name={"Redchili Phone"} quantity={2} />
                    </ul>
                }>
                <div>
                </div>
            </Popover>
        )
    }
}

export default CartPopover;