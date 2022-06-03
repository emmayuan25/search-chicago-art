import React from 'react'

export default function SearchResult(props) {

    const img = "https://www.artic.edu/iiif/2" + props + "/full/843,/0/default.jpg";

    return (
        <div className='SearchCard'>
            {/* <img className="resultImg" src=img alt={props.title}></img> */}
            <p className="imgTitle">{props.title}</p>
            <p className="imgYear">{props.date_display}</p>
        </div>
    )
}
