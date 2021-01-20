import React from 'react';


const Movie = (props) => {
  return (
    <div>
      <h4>{props.title}</h4>
      <img src={props.image_url} alt='Movie poster'/>
    </div>
    
  )
}

export default Movie;