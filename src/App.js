import React, { useState , useRef } from 'react';
import './App.css';
import axios from 'axios';
import SearchResult from './SearchResult';

function App(){
    const keywordRef = useRef();
    var keyword = "";

    const [searchText, setSearchText] = useState('');

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    } 

    const [ results, setResults ] = useState([]);

    // get search keyword
    function handleKeyword(event) {

        keyword = keywordRef.current.value;
        if (keyword === '') {
            alert("Please type in search words");
        }

        componentDidMount(searchText);
    }

    const componentDidMount = async (searchText) => {
        console.log(searchText);
        let response = await axios.get(`https://api.artic.edu/api/v1/artworks/search?q=${ searchText }&query[term][is_public_domain]=true`);
        response = response.data.data;
        setResults(response);
        
        console.log(results);
        
    }

    return (
        <div className="container">
            <header>Search the ChicagoArt Library</header>

            <div className="searchBar">
                <input className='searchInput' onChange={ handleSearch } ref={ keywordRef } placeholder="Search for..." type="text" />
                <button className='searchBtn' onClick={ handleKeyword }>Search</button>
            </div>

            <div className="displayResults">
                <SearchResult images={results} />
            </div>
             
        </div>
    )
}

export default App;
