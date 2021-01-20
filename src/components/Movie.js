import React from 'react';
import './Movie.css';

const Movie = (props) => {
  return (
    <div className='movie'>
      <div className='movie_content'>
        <h4 className='movie_content-text'>{props.title}</h4>
        <img onClick={() => {props.onSelectedMovie(props.id)}} src={props.image_url} alt='Movie poster'/>
      </div> 
   </div>
    
  )
}

export default Movie;