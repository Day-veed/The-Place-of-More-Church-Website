import React from 'react';
import styled from 'styled-components';
import useFirestore from '../hooks/useFirestore';
import './imageGrid.css'

const ImageGrid = ({setSelectedImg}) => {
    const { docs } = useFirestore('images');
    console.log(docs);

    return (
        <>
        <Gallery>
            {/*<h2>Gallery</h2>*/}
        </Gallery>
            <Grid>
                { docs && docs.map(doc => (
                    <div className='img-wrap' key={doc.id}
                        onClick={() => setSelectedImg(doc.url)}
                    >
                        <img src={doc.url} alt='uploaded pic' />
                    </div>
                ))}
            </Grid>
        
        </>
    )
}

export default ImageGrid;

const Gallery = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    >h2 {
        margin-bottom: -50px;
        font-family: 'Times New Roman', Times, serif;
        font-size: 50px;
        color: #722f37;
        font-weight: 700;
    }
`
const Grid = styled.div`
    margin: 20px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 40px;
    padding: 0px 70px;
    margin-top: -20px;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: -20px;
    }
    @media (max-width: 750px) {
            grid-template-columns: 1fr;
            grid-gap: 0px;
            //margin: -20px;
        }
`