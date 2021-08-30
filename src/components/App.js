import React, { Component } from "react";
import SearchBar from "./searchBar/SearchBar";
import GetImages from "./getImages/GetImages";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    images: [],
  };

  onSearchImage = async (search) => {
    const url = "https://api.unsplash.com/search/photos";
    const result = await axios.get(url, {
      params: {
        query: search,
      },
      headers: {
        Authorization: "Client-ID lNfi_xn3aeut0_MOOyEL5sXRBqRKwXvwG0gC-iWHasc",
      },
    });
    this.setState({
      images: result.data.results,
    });
    // console.log(this.state.images.length);
    // console.log(this.state.images);
    // console.log(result);
  };

  render() {
    return (
      <div className="app-container">
        <SearchBar onSearchImage={this.onSearchImage} />
        <GetImages images={this.state.images} />
      </div>
    );
  }
}

export default App;
