import React, { useState } from 'react';
import Search from '../static/search.svg'
function SearchBar(){
    return(
        <div class="container search">
                <input placeholder='Try "boomtownroi"'></input>
                <button><img alt="Search" src={Search}></img></button>

        </div>
        
    )
}

export default SearchBar