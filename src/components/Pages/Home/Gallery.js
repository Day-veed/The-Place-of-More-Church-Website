import React, { useState } from 'react'
import './Gallery.css';
import CloseIcon from '@mui/icons-material/Close';

import img1 from './Gallar/img1.jpg';
import img2 from './Gallar/img2.jpg';
import img3 from './Gallar/img3.jpg';
import img4 from './Gallar/img4.jpg';
import img5 from './Gallar/img5.jpg';
import img6 from './Gallar/img6.jpg';
import img7 from './Gallar/img7.jpg';
import img8 from './Gallar/img8.jpg';
import img15 from './Gallar/img15.jpg';
import img16 from './Gallar/img16.jpg';
import img17 from './Gallar/img17.jpg';
import img18 from './Gallar/img18.jpg';
import { getImageListItemBarUtilityClass } from '@mui/material';

function Gallery() {

    let data = [
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        },
        {
            id: 5,
            imgSrc: img5,
        },
        {
            id: 6,
            imgSrc: img6,
        },
        {
            id: 7,
            imgSrc: img7,
        },
        {
            id: 8,
            imgSrc: img8,
        },
        {
            id: 9,
            imgSrc: img15,
        },
        {
            id: 10,
            imgSrc: img16,
        },
        {
            id: 11,
            imgSrc: img17,
        },
        {
            id: 12,
            imgSrc: img18,
        },
    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel = (true);
    }
  return (
    <>
        <div className={model? "model open" : "model"}>
            <img src={tempimgSrc} />
            <CloseIcon onClick={() => setModel(false)} />
        </div>
        <div className='gallery'>
        {data.map((item, index)=>{
            return(
                <div className='pics' key={index} onClick={()=> getImg(item.imgSrc)}>
                    <img src={item.imgSrc} style={{width: '100%'}} />
                </div>
            )
        })}
        </div>
    </>
  )
}

export default Gallery
