import React, { useState , useRef } from 'react';
import SearchBox from './SearchBox';
import './App.css';
import axios from 'axios';
import SearchResult from './SearchResult';

function App(){
    const keywordRef = useRef();
    var keyword = "";

    const  [searchText, setSearchText] = useState('');

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
        let response = await axios.get(`https://api.artic.edu/api/v1/artworks/search?q=${ searchText }&query[term][is_public_domain]=true`);
        response = response.data.data;
        setResults(response);
        
        const resultItems = results.map((item) =>
            catchImg(item.api_link)
        );
    }

    const catchImg = async (link) => {
        let img_id = await axios.get(`${link}`);
        img_id = img_id.data.data.image_id;
        console.log(img_id);
        
        <SearchResult props={img_id} />

    }

    return (
        <div className="container">
            <header>Search the ChicagoArt Library</header>

            <div className="searchBar">
                <input className='searchInput' onChange={ handleSearch } ref={ keywordRef } placeholder="Search for..." type="text" />
                <button className='searchBtn' onClick={ handleKeyword }>Search</button>

            </div>
            
            <SearchBox />
        </div>
    )
}

export default App;
