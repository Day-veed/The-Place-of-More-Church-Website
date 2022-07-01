import React from 'react'
import "./images.css"
import img from '../Image/img.jpg';

function Images() {
  return (
    <div>
      <img src={img} className="logo" alt='' />
    </div>
  )
}

export default Images
