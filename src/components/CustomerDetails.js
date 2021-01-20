import React from 'react';

const CustomerDetails = ({customer}) => {
    return (
        <div>
            <h4>{customer.name}</h4>
            <p>Registered At: {customer.registered_at}</p>
            <p>Account Credit: {customer.account_credit}</p>
            <p>Videos Checked Out: {customer.videos_checked_out_count}</p>
        </div>
    )
};

export default CustomerDetails;