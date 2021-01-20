import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home'
import Search from './components/Search'
import Library from './components/Library'
import Customers from './components/Customers'
import MovieDetails from './components/MovieDetails'
import Movie from './components/Movie'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
export default function App() {

  const [movieList, setMovieList] = useState([])
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentMovie, setCurrentMovie] = useState('')

  console.log(currentMovie)


  useEffect(() => {
    axios.get(`http://localhost:3000/videos`)
      .then((response) => {
        setMovieList(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);


  const selectedMovie = (id) => {
    const movie = movieList.find((movie) => {
      return movie.id === id;
    });
    setCurrentMovie(movie);
  } 


  return (
    <Router>
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <ul className='nav'>
            <li className='nav-item'>
              <Link className='nav-link' to="/">Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/search">Search</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/library">Library</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/customers">Customers</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/library">
            <Library movieList={movieList} onSelectedMovie={selectedMovie} />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <div>
        <h2>Movie Selected</h2>
        <MovieDetails movie={currentMovie} />
      </div>

    </Router>
  );
}

