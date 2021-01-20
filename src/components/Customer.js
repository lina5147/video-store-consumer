import React from 'react';

const Customer = (props) => {
    return (
        <div className="customer">
            {/* <h4>{props.name}</h4> */}
            <h2 onClick={() => {props.onSelectedCustomer(props.id)}}>{props.name}</h2>
        </div>
    )
}

export default Customer;