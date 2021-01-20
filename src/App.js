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
import CustomerDetails from './components/CustomerDetails';
import Customer from './components/Customer';
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
  const [currentMovie, setCurrentMovie] = useState('');
  const [customerList, setCustomerList] = useState([]);
  const [currentCustomer, setCurrentCustomer] = useState('');
  // const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // console.log(currentMovie)
  // console.log(currentCustomer)

  useEffect(() => {
    axios.get(`http://localhost:3000/videos`)
      .then((response) => {
        setMovieList(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3000/customers`)
      .then((response) => {
        setCustomerList(response.data);
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

  const selectedCustomer = (customerId) => {
    const customer = customerList.find((customer) => {
      return customer.id === customerId;
    });
    setCurrentCustomer(customer);
    // console.log(currentCustomer)
  }

  const onSearch = (term) => {
    axios.get(`http://localhost:3000/videos/?query=${term}`)
      .then((response) => {
        setSearchResults(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        setErrorMessage(error.message)
      }); 

  };

  // useEffect(() => {
  //   axios.get(`http://localhost:3000/videos/?query=${term}`)
  //     .then((response) => {
  //       setSearchResults(response.data);
  //       console.log(response.data)
  //     })
  //     .catch((error) => {
  //       setErrorMessage(error.message)
  //     }); 
  // })


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
              <Search search={onSearch} />
          </Route>
          <Route path="/library">
            <section className='page'>
              <Library movieList={movieList} onSelectedMovie={selectedMovie} />
            </section>
          </Route>
          <Route path="/customers">
            <Customers customerList={customerList} onSelectedCustomer={selectedCustomer} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <div>
        <h2>Movie Selected</h2>
        { currentMovie !== '' ? <MovieDetails movie={currentMovie} /> : `Currently no movie is selected` }
        <h2>Customer Selected</h2>
        { currentCustomer !== '' ? <CustomerDetails customer={currentCustomer} /> : 'Currently no customer is selected' }
      </div>

    </Router>
  );
}

