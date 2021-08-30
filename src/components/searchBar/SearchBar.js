import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    search: "",
  };

  getInputValues = (e) => {
    const value = e.target.value;
    this.setState({
      search: value,
    });
  };

  setSearchKey = (e) => {
    // eslint-disable-next-line no-unused-expressions
    e.key === "Enter" ? this.searchImage() : null;
  };

  searchImage = (e) => {
    if (this.state.search === "") {
      return;
    }
    this.props.onSearchImage(this.state.search);
    this.setState({
      search: "",
    });
  };

  render() {
    return (
      <div className="search-bar-container ui input">
        <input
          type="text"
          placeholder="Search"
          value={this.state.search}
          onChange={this.getInputValues}
          onKeyPress={this.setSearchKey}
        />
        <button className="ui icon button" onClick={this.searchImage}>
          <i className="search icon"></i>
        </button>
      </div>
    );
  }
}

export default SearchBar;
