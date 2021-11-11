import React from 'react';
import userImage from './cartoon-dev.jpg';
import CartPopover from './popover';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openPopover: false
        };
    }

    handlePopoverOpen(e) {
        console.log("clicked");
        let openPopover = this.state.openPopover;
        this.setState({ openPopover: !openPopover })
    }

    render() {
        let openPopover = this.state.openPopover;
        return (
            <div className="userInfo">
                <button className="btn" onClick={this.handlePopoverOpen.bind(this)}>CART
                    <span class="circle">2</span>
                    <CartPopover isPopoverOpen={openPopover} />
                </button>
                <img src={userImage} className="userImage" alt="u" />
                <p>Username</p>
            </div>
        );
    }
}

export default User;