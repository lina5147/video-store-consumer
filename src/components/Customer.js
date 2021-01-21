import React from 'react';
import './Customers.css';


const Customer = (props) => {
    return (
        <div className="customer">
            {/* <h4>{props.name}</h4> */}
            <h2 onClick={() => {props.onSelectedCustomer(props.id)}} className='customers-hover'>{props.name}</h2>
        </div>
    )
}

export default Customer;