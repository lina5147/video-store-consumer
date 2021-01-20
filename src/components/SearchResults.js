import React from 'react';
import FoundMovie from './FoundMovie';

const SearchResults = (props) => {
    const searchComponents = props.results.map((movie) => {
        return (
            <FoundMovie 
                title={movie.title}
                overview={movie.overview}
                release_date={movie.release_date}
                image_url={movie.image_url}
                external_id={movie.external_id}
                key={movie.external_id}
          />
        )
    })

    return (
        <div>
            {searchComponents}
        </div>
    )
}

export default SearchResults;