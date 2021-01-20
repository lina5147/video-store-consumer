import React from 'react';

const Customer = (props) => {
    return (
        <div>
            {/* <h4>{props.name}</h4> */}
            <h2 onClick={() => {props.onSelectedCustomer(props.id)}}>{props.name}</h2>
            {/* <p onClick={() => {props.onSelectedCustomer(props.name)}} name={props.name}/> */}
        </div>
    )
}

export default Customer;