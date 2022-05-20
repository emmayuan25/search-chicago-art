import React, { useState , useRef } from 'react';
import SearchBox from './SearchBox';
import './App.css';

function App(){
    const keywordRef = useRef();

    function handleKeyword(event) {
        const keyword = keywordRef.current.value;
        if (keyword === '') {
            alert("Please type in search words");
        }
        console.log(keyword);
    }

    return (
        <div className="container">
            <header>Search the ChicagoArt Library</header>

            <div className="searchBar">
                <input className='searchInput' ref={ keywordRef } placeholder="Search for..." type="text" />
                <button className='searchBtn' onClick={ handleKeyword }>Search</button>

            </div>
            
            <SearchBox />
        </div>
    )
}

export default App;
