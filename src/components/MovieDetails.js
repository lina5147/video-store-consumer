import React from 'react';


const MovieDetails = ({movie}) => {
  return (
    <div>
      <h4>{movie.title}</h4>
      <img src={movie.image_url} alt='Movie poster' />
      <p>Inventory: {movie.inventory}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Overview: {movie.overview}</p>
    </div>
    
  )
}

export default MovieDetails;