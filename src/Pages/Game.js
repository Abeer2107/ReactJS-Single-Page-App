import React, { Component } from "react";
import XO from "../Components/DocXO/XO";

class Game extends Component{
    render(){
        return(
            <div>
                <h2>XO</h2><br />
                <p>That game from the doc!</p><br />
                <XO />
            </div>
        );
    }
}

export default Game;