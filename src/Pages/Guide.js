import React, { Component } from "react";
import Card from "../Components/Card";

class Guide extends Component{
    render(){
        return(
            <div>
                <h2>Colors Guide</h2>
                <p>Check out these color cards!</p>
                <ul className="cards-list">
                    <li><Card color="#3d2b3d"/></li>
                    <li><Card color="#FF6663"/></li>
                    <li><Card color="#9b1d20"/></li>
                    <li><Card color="#0065A6"/></li> 
                    <li><Card color="#e4f30e"/></li> 
                    <li><Card color="#0ef381"/></li>  
                    <li><Card color="#f30ee8"/></li> 
                    <li><Card color="#FFFFFF"/></li> 
                    <li><Card color="#000000"/></li> 
                    <li><Card color="#444444"/></li>  
                    <li><Card color="#FF0000"/></li>  
                    <li><Card color="#00FF00"/></li>  
                    <li><Card color="#0000FF"/></li>  
                    <li><Card color="#f75e0e"/></li>                
                </ul>
            </div>
        );
    }
}

export default Guide;