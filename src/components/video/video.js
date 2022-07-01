import styled from "styled-components"
import ReactPlayer from 'react-player'
import vid from './vid.mp4'

export default function Video() {

    return (
        <div>
            <T>
            <h1>Training Experience</h1>
            </T>
            
            <VideoContainer>
                <ReactPlayer 
                    width='1580px' 
                    height='240' 
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
    > h1 {
        margin-left: 135px;
        width: 1200;
        @media (max-width: 600) {
        margin-left: 40px;
        }
    }
`

const VideoContainer = styled.div`
    display: flex;
    margin-left: 10px;
`