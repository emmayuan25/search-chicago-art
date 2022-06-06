import React from 'react'
import ResultBox from './ResultBox';

const SearchResult = ({images}) => {

    return images.map((image) => 
        <ResultBox key={image.id} link={image.api_link} />
    )

}

export default SearchResult;