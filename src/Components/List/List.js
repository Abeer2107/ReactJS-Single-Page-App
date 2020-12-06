import React, { Component } from "react";
import ListItems from "./ListItems";
import "./List.css";

class List extends Component {
    
    constructor(props) {
        super(props);
     
        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {

            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
         
            this.setState((prevState) => {
                return { 
                    items: prevState.items.concat(newItem) 
                };
            });
           
            this._inputElement.value = "";
        }
             
        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });
       
        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div>
                <div className="list-header">

                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} placeholder="Type message"></input>
                        <button type="submit">Add</button>
                    </form>
                    
                </div>

                <ListItems entries = {this.state.items} delete={this.deleteItem} />

            </div>
        );
    }
}

export default List;