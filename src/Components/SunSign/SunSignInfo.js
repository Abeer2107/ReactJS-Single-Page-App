import React, { Component } from "react";

class SunSignInfo extends Component {

    constructor(props) {
        super(props);

        //TODO: Read them from a JSON file
        this.state = {
            symbols: ["♈︎","♉︎","♊︎","♋︎","♌︎","♍︎","♎︎","♏︎","♐︎","♑︎","♒︎","♓︎"],
            descriptions: ["Aries is the first sign of the zodiac and represents new beginnings. That is why the ram is energetic, enthusiastic, and a lover of freedom.",
            "A Taurus is usually obstinate. This gives him/her strength and will but also, makes him/her inflexible and stubborn. S/he is stable, peace-loving and loyal.",
            "A Gemini is a complex sign. It can be full of virtuousness and sinfulness at the same time. S/he wants to have fun like a small child.",
            "A Cancer can vary from being shy and reserved to being among the most brilliant in human history.",
            "Leo is the most extroverted and dominant sign in the zodiac. S/he is full of ambition, dominance, and ego. On the other hand, s/he is willful, courageous, independent, and confident.",
            "A Virgo is the only female in the zodiac. It shows high intelligence, creativity, and the desire for perfection.",
            "A Libra seems to be the most desirable sign in the zodiac. S/he will dress up for any occasion and look astonishing at all hours.",
            "A Scorpio is the most powerful sign in the zodiac. At the same time, s/he is the most obsessed and possessive one.",
            "A Sagittarius is usually full of energy, ready for adventure, and super honest. S/he is always optimistic and ambitious.",
            "Capricorn is the most serious and reliable sign in the zodiac, S/he is confident, hard working, practical, and persistent. This lets him/her take all the promotions at work.",
            "There can be two types of Aquarius. The first is sensitive and the second is lively. Both have rebellion and chaos in their genes.",
            "A Pisces is always patient and gentle. S/he is sensitive and likes to help people that suffer."],
            advantages: ["Energetic, Courageous, Confident, enthusiastic, Strong.",
            "Reliable, Loving, Determined, Patient.",
            "Communicative, Adaptable, Lively, Intellectual.",
            "Imaginative, Emotional, Protective, Intuitive.",
            "Faithful, Enthusiastic, Creative, Open-minded, Loving.",
            "Shy, Reliable, Intelligent, Analytical.",
            "Sociable, Diplomatic, Peaceful, Romantic.",
            "Emotional, Passionate, Magnetic, Intuitive, Strong.",
            "Honest, Intellectual, Straightforward, Optimistic.",
            "Ambitious, Patient, Practical, Hard working, Humorous.",
            "Humanitarian, Rebel, Intellectual, Inventive, Loyal, Independent.",
            "Kind, Selfless, Imaginative, Compassionate."],
            disadvantages: ["Impulsive, Stubborn, Impatient, Risky.",
            "Inflexible, Possessive, Greedy.",
            "Inconsistent, Tense, Superficial.",
            "Touchy, Moody, Unforgiving, Possessive.",
            "Dogmatic, Bossy, Intolerant.",
            "Overcritical, Perfectionist, Conservative.",
            "Self-indulgent, Flirtatious, Easily influenced.",
            "Possessive, Jealous, Obsessive, Moody.",
            "Irresponsible, Tactless, Careless.",
            "Pessimist, Loner, Excessive, Ambition.",
            "Unpredictable, Unemotional, Stubborn.",
            "Easily led, Secretive, Escapist."],
            planet: ["Mars","Venus","Mercury","The moon","The sun","Mercury","Venus","Pluto","Jupiter","Saturn","Uranus","Neptune"],
            tarot:["The Emperor","The Hierophant","The Lovers","The Chariot","Strength","The Hermit","Justice","Death","Temperance","The Devil","The Star","The Moon"],
            color:["Red","Pink","Yellow","Silver","Gold","Green & Dark brown","Blue & Pale Green",">Dark Red","Rich Purple","Brown","Turquoise","Sea Green"],
            stone:["Diamond","Emerald","Moss Agate","Pearl","Red Ruby","Sardonyx","Sapphire","Opal","Topaz","Black Onyx","Turquoise","Moonstone"]
        }

        this.create = this.create.bind(this);
    }
     
    create(sign, signNumber) {
        return (sign ? 
        <div className="sign-info" style={{ backgroundImage: "url(Images/BG.jpg)" }}>
            <h2>{sign} {this.state.symbols[signNumber-1]}</h2>
            <img src={`Images/${sign}.png`} alt="An image representing the resulting sun sign"/>

            <div className="sign-info-area">
                <p>{this.state.descriptions[signNumber-1]}</p><br />
                <p><b>Advantages:</b> {this.state.advantages[signNumber-1]}</p>
                <p><b>Disadvantages:</b> {this.state.disadvantages[signNumber-1]}</p><br />
                <p><b>Planet ruling:</b> {this.state.planet[signNumber-1]}</p>
                <p><b>Tarot card:</b> {this.state.tarot[signNumber-1]}</p>
                <p><b>Color:</b> {this.state.color[signNumber-1]}</p>
                <p><b>Star stone:</b> {this.state.stone[signNumber-1]}</p>
            </div>
        </div> : null
        );
    }
 
    render() {
        var sign = this.props.sign;
        var signNumber = this.props.signNumber;

        return (
            <div className="sign-area">
                {this.create(sign, signNumber)}
            </div>
        );
    }
};
 
export default SunSignInfo;