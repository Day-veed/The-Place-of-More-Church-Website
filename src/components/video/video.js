import styled from "styled-components"
import ReactPlayer from 'react-player'
import vid from './vid.mp4'
import { motion } from 'framer-motion'

export default function Video() {

    return (
        <div>
            <T>
            <motion.h1 initial={{ y: -35 }} animate={{ y: -10}} transition={{ delay: 0.2, type: 'spring', stiffness: 10 }}>Training Experience</motion.h1>
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
            </VideoContainer>    
        </div>
    );
}

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
`