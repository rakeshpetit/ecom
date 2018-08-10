import React, { Component } from "react";
import ProductMenuItems from './ProductMenuItems'
export class Home extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  render() {
    return (
        <div onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}>
            <div>Products</div>
            <div style={menu}>
                <div style={menuItems}>
                {/* <ProductMenuItems /> */}
                    {this.state.isHovering &&
                        <ProductMenuItems />}
                </div>
            </div>
        </div>
    );
  }
}

const menu = {
  position: 'absolute',
  zIndex: 1,
  display: 'flex',
  left: '1%'
  };

const menuItems = {
  position: 'absolute',
  zIndex: 2,
  display: 'flex'
  };

export default Home;
