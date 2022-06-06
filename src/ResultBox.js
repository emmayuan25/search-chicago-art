import React, { useState } from 'react';
import axios from 'axios';


const ResultBox = ({link}) => {
    const [ image, setImage ] = useState([]);
    const [ item, setItem ] = useState([]);


    const catchImg = async (link) => {
        let target = await axios.get(`${link}`);
        let img_id = target.data.data.image_id;
        let image = "https://www.artic.edu/iiif/2/" + img_id + "/full/843,/0/default.jpg";

        setImage(image);
        setItem(target.data.data);
        

    }
    
    catchImg(link);
    console.log(item, image);

    
    return (
        <div className='ResultBox'>
            <img className="resultImg" src={image} alt={item.title}></img>
            <p className="imgTitle">{item.title}</p>
            <p className="imgYear">{item.date_display}</p>
        </div>
    )

}

export default ResultBox;