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
        // console.log(searchText);
    } 

    // const [ state, setState ] = useState({items:[], isLoaded: false});
    const [ results, setResults ] = useState([]);

    // get search keyword
    function handleKeyword(event) {
        // console.log(event);

        keyword = keywordRef.current.value;
        if (keyword === '') {
            alert("Please type in search words");
        }

        componentDidMount(searchText);

        // setSearchText(keyword);

        // console.log(keyword);
        // console.log(searchText);
    }

    const componentDidMount = async (searchText) => {
        let response = await axios.get(`https://api.artic.edu/api/v1/artworks/search?q=${ searchText }&query[term][is_public_domain]=true`);
        response = response.data.data;
        console.log(response);
        setResults(response);
        
        // console.log(results.items);
    }

    // function catchImage(props) {
    //     const resultImgs = state.items.map(({api_link}) => 
    //         fetch(api_link)
    //         .then(res => res.json())
    //         .then(json => {
    //             <SearchResult item={image_id} />
    //         })
    //     );
    // }

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
