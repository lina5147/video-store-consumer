import React from 'react';
import './Movie.css';
import './Movie.css';

const FoundMovie = (props) => {
  return (
    <div className='movie'>
      <div className='movie_content'>
        <h4 className='movie_content-text'>{props.title}</h4>
        <img src={props.image_url} alt='Movie poster'/>
      </div> 
   </div>
    //add movie button
  )
}

export default FoundMovie;