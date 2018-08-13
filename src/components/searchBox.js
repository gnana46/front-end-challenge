/**
 * SearchBox: has input text and buttton 
 * @props: pass function handleSearch to get the text input value
 * 
 */

import React,{Component} from 'react';

class SearchBox extends Component{

    state = {searchText: ''};
    // to handle input change
    handleChange = event => {
        this.setState({ searchText: event.target.value });
    };
    // to handle search button & pass the value to search home
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleSearch(this.state.searchText);
    }

    render(){
        return (
            <div className="search-bar">
                <input type="text" value={this.state.searchText} onChange={this.handleChange} placeholder="title, actor, director, etc..." className="search-input" />
                <button className="icon-search btn-find" onClick={this.handleSubmit}></button>
            </div>
        );
    }
}

export default SearchBox;