import React, { useState } from 'react';
import { Search } from 'carbon-components-react';

const SearchBar = ({doSearch}) => {
    
    const [input, setInput] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInput(value);
        console.log(typeof doSearch)
    } 

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            doSearch(input)
        }
    }
    
    return (
        <Search
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
        />
    )
}

export default SearchBar;