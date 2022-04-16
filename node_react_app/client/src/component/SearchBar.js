import React, { useState } from 'react';
import Search from '../static/search.svg'

const SearchBar = () => {  
    const [textInput, setTextInput] = React.useState('');
  
    const handleClick = () => {
      console.log(textInput);
    }
  
    const handleChange = (event) => {
      setTextInput(event.target.value);
    }

    return(
        <div className="container search">
                <input onChange={handleChange} placeholder='Try "boomtownroi"'></input>
                <button onClick={handleClick}><img alt="Search" src={Search}></img></button>
        </div>
        
    )
}

export default SearchBar