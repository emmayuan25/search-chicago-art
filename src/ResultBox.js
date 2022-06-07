import React, { useState } from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';


const ResultBox = ({link}) => {

    // Initialize states
    const [ image, setImage ] = useState([]);
    const [ item, setItem ] = useState([]);
    const [ modal, setModal ] = useState({ showModal: false });


    // Function to retirieve individual results
    const catchImg = async (link) => {
        let target = await axios.get(`${link}`);
        let img_id = target.data.data.image_id;
        let image = "https://www.artic.edu/iiif/2/" + img_id + "/full/600,/0/default.jpg";

        setImage(image);
        setItem(target.data.data);
    }
    
    // Call API to render results
    catchImg(link);
    

    // Toggle details modal on and off 
    const seeDetail = () => {
        setModal({ showModal: true });
        console.log(item);
    }

    const hideDetail = () => {
        setModal({ showModal: false });
    }

    
    
    return (
        <div className='ResultBox'>
            <img className="resultImg" src={image} alt={item.title} onClick={()=>seeDetail()}></img>

            <ReactModal
                className="detailModal"
                isOpen={modal.showModal}
                contentLabel="details tab"
                onRequestClose={hideDetail}
                shouldCloseOnOverlayClick={true}
            >
                <img className="detailImg" src={image} alt={item.title}></img>
                <div className="detailText">
                    <p className="detailTitle">{item.title}</p>
                    <p><span className="textBold">Artist:</span> {item.artist_title}</p>
                    <p><span className="textBold">Artwork Type:</span> {item.artwork_type_title}</p>
                    <p><span className="textBold">Date:</span> {item.date_display}</p>
                </div>
            </ReactModal>

            <p className="imgTitle">{item.title}</p>
            <p className="imgYear">{item.date_display}</p>
        </div>
    )

}

export default ResultBox;