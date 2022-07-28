import styled from "styled-components"
import ReactPlayer from 'react-player'
import vid from './vid.mp4'
import { motion } from 'framer-motion'
import ow from '../body/ow.jpg';
import ow2 from '../body/ow2.jpg';
import { Button } from "@mui/material";

export default function Video() {

    return (
        <>
        <FeaturedMessages >
        <h2> Featured Messages</h2>
        <Videos>
        <VideoContainers>
                <ReactPlayer 
                    width='80%' 
                    height='70' 
                    controls 
                    url={vid}
                    onReady={() => console.log('onready callback')}
                    onStart={() => console.log('onStart callback')}
                    onPause={() => console.log('onPause callback')}
                    onEnded={() => console.log('onEnded callback')}
                    onError={() => console.log('onError callback')} 
                />
            </VideoContainers>  
            <VideoContainers>
                <ReactPlayer 
                    width='80%' 
                    height='70' 
                    controls 
                    url={vid}
                    onReady={() => console.log('onready callback')}
                    onStart={() => console.log('onStart callback')}
                    onPause={() => console.log('onPause callback')}
                    onEnded={() => console.log('onEnded callback')}
                    onError={() => console.log('onError callback')} 
                />
            </VideoContainers>  
            <VideoContainers>
                <ReactPlayer 
                    width='80%' 
                    height='70' 
                    controls 
                    url={vid}
                    onReady={() => console.log('onready callback')}
                    onStart={() => console.log('onStart callback')}
                    onPause={() => console.log('onPause callback')}
                    onEnded={() => console.log('onEnded callback')}
                    onError={() => console.log('onError callback')} 
                />
            </VideoContainers>  
        </Videos>
        <Videos>
        <VideoContainers>
                <ReactPlayer 
                    width='80%' 
                    height='70' 
                    controls 
                    url={vid}
                    onReady={() => console.log('onready callback')}
                    onStart={() => console.log('onStart callback')}
                    onPause={() => console.log('onPause callback')}
                    onEnded={() => console.log('onEnded callback')}
                    onError={() => console.log('onError callback')} 
                />
            </VideoContainers>  
            <VideoContainers>
                <ReactPlayer 
                    width='80%' 
                    height='70' 
                    controls 
                    url={vid}
                    onReady={() => console.log('onready callback')}
                    onStart={() => console.log('onStart callback')}
                    onPause={() => console.log('onPause callback')}
                    onEnded={() => console.log('onEnded callback')}
                    onError={() => console.log('onError callback')} 
                />
            </VideoContainers>  
            <VideoContainers>
                <ReactPlayer 
                    width='80%' 
                    height='70' 
                    controls 
                    url={vid}
                    onReady={() => console.log('onready callback')}
                    onStart={() => console.log('onStart callback')}
                    onPause={() => console.log('onPause callback')}
                    onEnded={() => console.log('onEnded callback')}
                    onError={() => console.log('onError callback')} 
                />
            </VideoContainers>  
        </Videos>
        <Button style={{backgroundColor:'#722f37', color: 'white', borderRadius:'50px'}}>More Messages...</Button>
        </FeaturedMessages>

        <motion.div initial={{ y: 75 }} animate={{ y: 10}} transition={{ delay: 0.2, type: 'spring', stiffness: 10 }}>
           {/* <T>
            <h1 >Training Experience</h1>
            </T>
            
            <VideoContainer>
                <ReactPlayer 
                    width='850px' 
                    height='70' 
                    controls 
                    url={vid}
                    onReady={() => console.log('onready callback')}
                    onStart={() => console.log('onStart callback')}
                    onPause={() => console.log('onPause callback')}
                    onEnded={() => console.log('onEnded callback')}
                    onError={() => console.log('onError callback')} 
                />
    </VideoContainer>  */}  
        </motion.div>
        </>
    );
}

const Videos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`
const VideoContainers = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`

const FeaturedMessages = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //background-image: url(${ow2});
    background-position: center;
    width: auto;
    height: auto;
    background-color: whitesmoke;
    padding-bottom: 35px;

    > h2 {
        font-weight: bold;
        padding-top: 40px;
        padding-bottom: 25px;
        color: #722f37;
    }
`

const T = styled.div`  
    //display: block;
    display: flex;
    width: 100%;
    justify-content: center;
    align-content: center;
    color: #722f37;
    > h1 {
       
    }
`

const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`