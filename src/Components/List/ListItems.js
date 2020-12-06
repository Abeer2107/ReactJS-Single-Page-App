import React, { Component } from "react";

class ListItems extends Component {

    constructor(props) {
        super(props);
     
        this.create = this.create.bind(this);
    }
     
    delete(key) {
        this.props.delete(key);
    }

    create(item) {
        //Return a clickable list item / deleted on click
        return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
    }
 
    render() {
        var entries = this.props.entries;
        var listItems = entries.map(this.create);
 
        return (
            <ul className="list">
                {listItems}
            </ul>
        );
    }
};
 
export default ListItems;