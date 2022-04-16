import { useState } from 'react';
import Search from '../static/search.svg'

const SearchBar = ({registerInput}) => {  
    const [textInput, setTextInput] = useState('');
  
    const handleChange = (event) => {
      setTextInput(event.target.value);
    }

    // update textInput on change, return prop to parent on click
    return(
        <div className="container search flex align">
                <input onChange={handleChange} placeholder='Try "boomtownroi"'></input>
                <button onClick={() => registerInput(textInput)}><img alt="Search" src={Search}></img></button>
        </div>
    )
}

export default SearchBar