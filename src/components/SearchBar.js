import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    const [formFields, setFormFields] = useState({
        search: '',
    });

    const onFieldChange = (event) => {
        setFormFields({search: event.target.value});
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.search(formFields.search);

        setFormFields({
            search: '',
        });
    };

    return (
        <div>
            <form
                className='new-search__form'
                onSubmit={onFormSubmit}
            >
                <div>
                    <input 
                        onChange={onFieldChange}
                        placeholder='search'
                        name='search'
                        value={formFields.search}
                    />
                    <input
                        className='new-search__submit-button'
                        type='submit'
                        value='Submit'
                    />     
                </div>
            </form>
        </div>
    )
};

export default SearchBar;