import React, { Component } from "react";
import List from "../Components/List/List";

class Contact extends Component{
    render(){
        return(
            <div>
                <h2>Got Questions?</h2><br />
                <p>Leave a punch of messages only you can read here XD</p>
                <List />
            </div>
        );
    }
}

export default Contact;