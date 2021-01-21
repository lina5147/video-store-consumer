import React, { useState, useEffect }  from 'react';
import Movie from './Movie';
import './Library.css';

const Library = (props) => {

  const movieComponents = props.movieList.map((movie) => {
    return (
      <Movie 
        id={movie.id}
        title={movie.title}
        overview={movie.overview}
        release_date={movie.release_date}
        image_url={movie.image_url}
        external_id={movie.external_id}
        key={movie.id}
        onSelectedMovie={props.onSelectedMovie}
      />
    )
  })

  return (
    <div>
      <h2 className='library-title'>Movie Library</h2>
      <div className='library'>
        {movieComponents}
      </div>
    </div>
  )
}

export default Library;