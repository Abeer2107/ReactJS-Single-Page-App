import React, { Component } from "react";

class Square extends React.Component {
    render() {
        var style = {
            height: 150,
            backgroundColor: this.props.color,
        };

        return(
            <div style={style}></div>
        );
    }
}
   
class Label extends React.Component {
    render() {
        var style = {
            fontFamily: "sans-serif",
            fontWeight: "bold",
            padding: 10,
            margin: 0,
            textAlign: "center"
        };
      
        return(
            <p style={style}>{this.props.color}</p>
        );
    }
}
   
class Card extends React.Component {
    render() {
        var style = {
            height: 200,
            width: 150,
            padding: 0,
            backgroundColor: "#FFF",
            WebkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)"
        };
      
        return(
            <div style={style}>
                <Square color={this.props.color} />
                <Label color={this.props.color} />
            </div>
        );
    }
}

export default Card;