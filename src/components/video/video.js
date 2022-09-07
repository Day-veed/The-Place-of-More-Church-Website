import styled from "styled-components"
import ReactPlayer from 'react-player'
import vid from './vid.mp4'
import { motion } from 'framer-motion'
import ow from '../body/ow.jpg';
import ow2 from '../body/ow2.jpg';
import { Button } from "@mui/material";
import YouTube from "react-youtube";

export default function Video() {

   function videoOnPlay (event) {
        const player = event.target
    }

    const opts = {
        height: 240,
        width: 340,
    }

    return (
        <>
        <motion.div initial={{ y: 75 }} animate={{ y: 10}} transition={{ delay: 0.2, type: 'spring', stiffness: 10 }}>
        <FeaturedMessages >
        <h2> Featured Messages</h2>
        <Videos>
        <VideoContainers>
                <YouTube 
                    videoId="kVK0B1FpBnQ" 
                    opts={opts} 
                    onPlay
                    onReady={() => console.log('onready callback')}
                    onStart={() => console.log('onStart callback')}
                    onPause={() => console.log('onPause callback')}
                    onEnded={() => console.log('onEnded callback')}
                    onError={() => console.log('onError callback')} 
                />
            </VideoContainers>  
            <br/>
            <VideoContainers>
                <YouTube 
                    videoId="zGQH0me3VEo" 
                    opts={opts} 
                    onPlay
                    onReady={() => console.log('onready callback')}
                    onStart={() => console.log('onStart callback')}
                    onPause={() => console.log('onPause callback')}
                    onEnded={() => console.log('onEnded callback')}
                    onError={() => console.log('onError callback')} 
                />
            </VideoContainers>  
            <VideoContainers>
                <YouTube 
                    videoId="gmh30xw5YpI" 
                    opts={opts} 
                    onPlay
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
                <YouTube 
                    videoId="-o8-7ZJGlWQ" 
                    opts={opts} 
                    onPlay
                    onReady={() => console.log('onready callback')}
                    onStart={() => console.log('onStart callback')}
                    onPause={() => console.log('onPause callback')}
                    onEnded={() => console.log('onEnded callback')}
                    onError={() => console.log('onError callback')} 
                />
            </VideoContainers>  
            <VideoContainers>
                <YouTube 
                    videoId="TreYWBU-Vac" 
                    opts={opts} 
                    onPlay
                    onReady={() => console.log('onready callback')}
                    onStart={() => console.log('onStart callback')}
                    onPause={() => console.log('onPause callback')}
                    onEnded={() => console.log('onEnded callback')}
                    onError={() => console.log('onError callback')} 
                />
            </VideoContainers>  
            <div></div>
            <VideoContainers>
                <YouTube 
                    videoId="vDl-yanieJQ" 
                    opts={opts} 
                    onPlay
                    onReady={() => console.log('onready callback')}
                    onStart={() => console.log('onStart callback')}
                    onPause={() => console.log('onPause callback')}
                    onEnded={() => console.log('onEnded callback')}
                    onError={() => console.log('onError callback')} 
                />
            </VideoContainers>  
        </Videos>
        <Button style={{backgroundColor:'#722f37', color: 'white', borderRadius:'50px'}} href='https://www.youtube.com/channel/UCVm83thLs-WavYc5ANXitFw'>More Messages...</Button>
        </FeaturedMessages>
        </motion.div>

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
    width: 80%;

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
    background-image:"https://www.bing.com/images/search?view=detailV2&ccid=DBTYBxbz&id=8FADAEB50FFB677D154CEB3D3B9581D8246EBF6A&thid=OIP.DBTYBxbzVrOaDVu_9RUUvQHaD2&mediaurl=https%3a%2f%2fpng.pngtree.com%2fthumb_back%2ffw800%2fbackground%2f20190221%2fourmid%2fpngtree-tech-cool-particle-background-creative-business-big-data-image_17381.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.0c14d80716f356b39a0d5bbff51514bd%3frik%3dar9uJNiBlTs96w%26pid%3dImgRaw%26r%3d0&exph=500&expw=960&q=Cool+Backgrounds+for+a+Business+Website&simid=608014657672408992&FORM=IRPRST&ck=C6A1D134B13D7A9AF58F64D7814C9B3B&selectedIndex=25";
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

    >Button {
        :hover {
            background: gold;
        }
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