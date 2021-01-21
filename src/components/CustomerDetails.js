import React from 'react';
import './CustomerDetails.css';
const CustomerDetails = ({customer}) => {
    return (
        <div className='customer-details'>
            <h2>{customer.name}</h2>
            <p>Address: {customer.address}</p>
            <p>City: {customer.city}</p>
            <p>State: {customer.state}</p>
            <p>Postal Code: {customer.postal_code}</p>
            <p>Phone Number: {customer.phone}</p>
            <p>Registered At: {customer.registered_at}</p>
            <p>Account Credit: ${customer.account_credit}</p>
            <p>Videos Checked Out: {customer.videos_checked_out_count}</p>
        </div>
    )
};

export default CustomerDetails;