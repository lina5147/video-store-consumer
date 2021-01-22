import React from 'react';
import Customer from './Customer';
import './Customers.css';

const Customers = (props) => {

  const customerComponents = props.customerList.map((customer) => {
    return (
        <Customer
          id={customer.id}
          name={customer.name}
          key={customer.id}
          onSelectedCustomer={props.onSelectedCustomer}
        />
    )
  });

  return (
    <div className='customers'>
      <h4 className='customers-title'>CUSTOMERS</h4>
      {customerComponents}
    </div>
  )
};

export default Customers;