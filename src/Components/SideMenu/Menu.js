import React, { Component } from "react";
import "./Menu.css";
import "../../Animations/BeatingHeart.css";

class Menu extends Component {
  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
      <div id="flyoutMenu" onMouseDown={this.props.handleMouseDown} className={visibility}>
        <h2><button>Back</button></h2>
        <div className="heart"></div>      
      </div>
    );
  }
}
 
export default Menu;