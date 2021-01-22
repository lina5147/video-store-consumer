import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import '../App.css';

const Search = (props) => {
  return (
    <div>
      <h2 className='page-title'>Search</h2>
      <SearchBar search={props.search}/>
      { props.results !== [] ? <SearchResults
        results={props.results} addMovie={props.addMovie}
      /> : '' }
    </div>
  )
};

export default Search;