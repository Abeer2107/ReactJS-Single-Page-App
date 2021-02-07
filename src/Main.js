import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import Home from "./Pages/Home";
import Guide from "./Pages/Guide";
import Contact from "./Pages/Contact";
import Game from "./Pages/Game";
import Zodiac from "./Pages/Zodiac";

import MenuButton from "./Components/SideMenu/MenuButton";
import Menu from "./Components/SideMenu/Menu";

class Main extends Component {

    constructor(props, context){
        super(props, context);

        this.state = {
            visible: false
        };

        //Hidden menu
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseDown(e) {
        this.toggleMenu();
        e.stopPropagation();
    }

    toggleMenu(){
        this.setState({
            visible: !this.state.visible,
        });
    }

    render() {
        return (
            <HashRouter>
                <MenuButton handleMouseDown={this.handleMouseDown}/>
                <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
                
                <div>
                    <h1>Single Page App</h1>

                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/guide">Guide</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/game">XO</NavLink></li>
                        <li><NavLink to="/zodiac">Zodiac</NavLink></li>
                    </ul>

                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/guide" component={Guide}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/game" component={Game}/>
                        <Route path="/zodiac" component={Zodiac}/>
                    </div>
                </div>
            </HashRouter>      
        );
    }
}
 
export default Main;