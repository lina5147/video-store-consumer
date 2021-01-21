import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const Search = (props) => {
  return (
    <div>
      <h2>Search</h2>
      <SearchBar
        search={props.search}

      />
      { props.results !== [] ? <SearchResults
        results={props.results} addMovie={props.addMovie}
      /> : '' }
    </div>

  )
};

export default Search;