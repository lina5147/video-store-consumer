import React from 'react';
import Customer from './Customer';
import './Customers.css';


const Customers = (props) => {

  const customerComponents = props.customerList.map((customer) => {
    return (
        <Customer
          id={customer.id}
          name={customer.name}
          registered_at={customer.registered_at}
          address={customer.address}
          city={customer.city}
          state={customer.state}
          postal_code={customer.postal_code}
          phone={customer.phone}
          account_credit={customer.account_credit}
          videos_checked_out_count={customer.videos_checked_out_count}
          key={customer.id}
          onSelectedCustomer={props.onSelectedCustomer}
        />
    )
  })
  return (
    <div className='customers'>
      <h4 className='customers-title'>Customers:</h4>
      {customerComponents}
    </div>
  )
}

export default Customers;