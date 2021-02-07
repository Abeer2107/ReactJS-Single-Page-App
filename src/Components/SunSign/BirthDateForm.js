import React, { Component } from "react";
import SunSignInfo from "./SunSignInfo";
import "./Zodiac.css";

class BirthDateForm extends Component {
    
    constructor(props) {
        super(props);
     
        this.state = {
            sign: "",
            signNumber: 0
        };

        this.getSign = this.getSign.bind(this);
    }

    getSign(e) {
        if (this._inputDay.value !== "" && this._inputMonth.value !== "") {

            var birthDate = {
                day: this._inputDay.value,
                month: this._inputMonth.value,
            };
         
            var resSign = "", resNum = 0;

            //TODO: A better way than this + fixing stuff like 31 February XD
            if((birthDate.month === "3" && parseInt(birthDate.day) >= 21) || (birthDate.month === "4" && parseInt(birthDate.day) <= 19)){
                resSign = "Aries";
                resNum = 1;
            }else if((birthDate.month === "4" && parseInt(birthDate.day) >= 20) || (birthDate.month === "5" && parseInt(birthDate.day) <= 20)){
                resSign = "Taurus";
                resNum = 2;
            }else if((birthDate.month === "5" && parseInt(birthDate.day) >= 21) || (birthDate.month === "6" && parseInt(birthDate.day) <= 21)){
                resSign = "Gemini";
                resNum = 3;
            }else if((birthDate.month === "6" && parseInt(birthDate.day) >= 22) || (birthDate.month === "7" && parseInt(birthDate.day) <= 22)){
                resSign = "Cancer";
                resNum = 4;
            }else if((birthDate.month === "7" && parseInt(birthDate.day) >= 23) || (birthDate.month === "8" && parseInt(birthDate.day) <= 22)){
                resSign = "Leo";
                resNum = 5;
            }else if((birthDate.month === "8" && parseInt(birthDate.day) >= 23) || (birthDate.month === "9" && parseInt(birthDate.day) <= 22)){
                resSign = "Virgo";
                resNum = 6;
            }else if((birthDate.month === "9" && parseInt(birthDate.day) >= 23) || (birthDate.month === "10" && parseInt(birthDate.day) <= 23)){
                resSign = "Libra";
                resNum = 7;
            }else if((birthDate.month === "10" && parseInt(birthDate.day) >= 24) || (birthDate.month === "11" && parseInt(birthDate.day) <= 21)){
                resSign = "Scorpio";
                resNum = 8;
            }else if((birthDate.month === "11" && parseInt(birthDate.day) >= 22) || (birthDate.month === "12" && parseInt(birthDate.day) <= 21)){
                resSign = "Sagittarius";
                resNum = 9;
            }else if((birthDate.month === "12" && parseInt(birthDate.day) >= 22) || (birthDate.month === "1" && parseInt(birthDate.day) <= 19)){
                resSign = "Capricorn";
                resNum = 10;
            }else if((birthDate.month === "1" && parseInt(birthDate.day) >= 20) || (birthDate.month === "2" && parseInt(birthDate.day) <= 18)){
                resSign = "Aquarius";
                resNum = 11;
            }else if((birthDate.month === "2" && parseInt(birthDate.day) >= 19) || (birthDate.month === "3" && parseInt(birthDate.day) <= 20)){
                resSign = "Pisces";
                resNum = 12;
            }

            this.setState({
                sign: resSign,
                signNumber: resNum
            });

            console.log(this.state.sign);
        }
             
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <div className="date-form">

                    <form onSubmit={this.getSign}>
                        <input ref={(a) => this._inputDay = a} type = "number" min="1" max="31" placeholder="dd"></input>
                        <input ref={(a) => this._inputMonth = a} type = "number" min="1" max="12" placeholder="mm"></input>
                        <button type="submit">Submit</button>
                    </form>
                    
                </div>

                <SunSignInfo sign = {this.state.sign} signNumber = {this.state.signNumber}/>

            </div>
        );
    }
}

export default BirthDateForm;