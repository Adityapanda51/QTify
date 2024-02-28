import React from 'react';
import "./Searchbar.css"
import searchIcon from "../../Assets/Search icon.png";

const SearchBar = () => {
  return (
      <div class="searchBar">
      <input type="search" placeholder="Search an album of your choice" />
      <div class="searchIconCont">
        <img src={searchIcon} class="searchImage" alt="search Icon" />
      </div>
      </div>
  );
};

export default SearchBar;
