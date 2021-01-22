import React from 'react';
import Movie from './Movie';
import './Library.css';

const Library = (props) => {

  const movieComponents = props.movieList.map((movie) => {
    return (
      <Movie 
        id={movie.id}
        title={movie.title}
        image_url={movie.image_url}
        key={movie.id}
        onSelectedMovie={props.onSelectedMovie}
      />
    )
  });

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