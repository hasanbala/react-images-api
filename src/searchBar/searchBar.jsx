import React, { useState } from "react";
import { UseAppContext } from "../context";
import axios from "axios";
import "../styles/searchBar.css";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { setImages } = UseAppContext();

  const getInputValues = (e) => setSearch(e.target.value);

  const setSearchKey = (e) => {
    // eslint-disable-next-line no-unused-expressions
    e.key === "Enter" ? searchImage() : null;
  };

  const OnSearchImage = async (search) => {
    const url = "https://api.unsplash.com/search/photos";
    const result = await axios.get(url, {
      params: {
        query: search,
        per_page: 30,
      },
      headers: {
        Authorization: "Client-ID lNfi_xn3aeut0_MOOyEL5sXRBqRKwXvwG0gC-iWHasc",
      },
    });
    setImages(result.data.results);
  };

  const searchImage = () => {
    if (search === "") {
      return;
    }
    OnSearchImage(search);
    setSearch("");
  };

  return (
    <div className="search-bar-container ui input">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={getInputValues}
        onKeyPress={setSearchKey}
      />
      <button className="ui icon button" onClick={searchImage}>
        <i className="search icon"></i>
      </button>
    </div>
  );
};
