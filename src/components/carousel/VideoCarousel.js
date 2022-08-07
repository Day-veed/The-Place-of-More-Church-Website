import React from 'react'
import { Carousel } from 'react-bootstrap'
import vid from './vid.mp4'
import ReactPlayer from 'react-player'
import './VideoCarousel.css'

function VideoCarousel() {
  const videoProperties = [
    {
      id: 1,
      title: "The Place of More",
      src: vid
    },
    {
      id: 2,
      title: "Join us",
      src: vid
    }
  ]
  return (
    <>
    <div className='main'>
      <video src={vid} autoPlay loop muted />
      <div className='content'>
        <h1>Welcome</h1>
        <p>To The Place of More Church</p>
      </div>
    </div>
    {/*<div>
      <Carousel>
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                url={videoObj.src}
                width='100%'
                pip={true}
                playing={true}
              />
              <Carousel.Caption>
                <h3>{videoObj.title}</h3>
                <p>{videoObj.credit}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
      </div>*/}
      </>
  )
}

export default VideoCarousel