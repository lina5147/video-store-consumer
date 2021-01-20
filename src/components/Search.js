import React from 'react';
import SearchBar from './SearchBar';


const Search = (props) => {
  return (
    <div>
      <h2>Search</h2>
      <SearchBar
        search={props.search}
      />
    </div>
  )
};

export default Search;