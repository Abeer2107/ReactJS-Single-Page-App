import React, { Component } from "react";
import BirthDateForm from "../Components/SunSign/BirthDateForm";

class Zodiac extends Component{
    render(){
        return(
            <div>
                <h2>Zodiac Sign</h2><br />
                <p>Enter your date of birth to find out info about your sun sign</p><br />
                <BirthDateForm />
            </div>
        );
    }
}

export default Zodiac;