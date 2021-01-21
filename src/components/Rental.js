import React from 'react';
import MovieDetails from './MovieDetails'
import CustomerDetails from './CustomerDetails'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Rental.css';

const Rental = ({movie, customer, successfulRental, rentalCallback}) => {

  const buttonDisplay = (movie !== '' && customer !== '') ? <button onClick={() => {rentalCallback()}} className='btn btn-secondary btn-lg btn-block'>Create Rental</button> : ''
  
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Selected Movie
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{ movie !== '' ? <MovieDetails movie={movie} /> : `Currently no movie is selected` }</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Selected Customer
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>{ customer !== '' ? <CustomerDetails customer={customer} /> : 'Currently no customer is selected' }</Card.Body>
          </Accordion.Collapse>
        </Card>
        {buttonDisplay}
        { successfulRental ? <p>Successful Rental</p> : ''}
      </Accordion>
  </div>

  )
};

export default Rental;