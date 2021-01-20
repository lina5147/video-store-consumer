import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import Movie from './Movie';

const Library = () => {

  const [movieList, setMovieList] = useState([])
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/videos`)
      .then((response) => {
        console.log(response.data)
        setMovieList(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  const movieComponents = movieList.map((movie) => {
    return (
      <Movie 
        id={movie.id}
        title={movie.title}
        overview={movie.overview}
        release_date={movie.release_date}
        image_url={movie.image_url}
        external_id={movie.external_id}
        key={movie.id}
      />
    )
  })

  return (
    <div>{movieComponents}</div>
  )
}

export default Library;