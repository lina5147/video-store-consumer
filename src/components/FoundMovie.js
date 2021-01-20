import React from 'react';
import './Movie.css';

const FoundMovie = (props) => {
  return (
    <div>
      <div className='found-movie_content'>
        <h4 className='found-movie_content-text'>{props.title}</h4>
        <img src={props.image_url} alt='Movie poster'/>
      </div> 
   </div>
    //add movie button
  )
}

export default FoundMovie;