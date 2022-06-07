import React from 'react'
import ResultBox from './ResultBox';

// Container with all results
// Generate individual result cards
const SearchResult = ({images}) => {

    return images.map((image) => 
        <ResultBox key={image.id} link={image.api_link} />
    )

}

export default SearchResult;