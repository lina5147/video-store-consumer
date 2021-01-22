import React from 'react';
import FoundMovie from './FoundMovie';
import './SearchResults.css';

const SearchResults = (props) => {
    const searchComponents = props.results.map((movie) => {
        return (
            <FoundMovie 
                title={movie.title}
                image_url={movie.image_url}
                external_id={movie.external_id}
                key={movie.external_id}
                addMovie={props.addMovie}
            />
        );
    });

    return (
        <div className='search_results'>
            {searchComponents}
        </div>
    )
};

export default SearchResults;