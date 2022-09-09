import React from 'react'
import styled from 'styled-components'

function Card({title, imageUrl, body}) {
  return (
    <CardContainer>
        <ImageContainer>
            <img src={imageUrl} alt='' />
        </ImageContainer>
        <CardTitle>
            {title}
        </CardTitle>
        <CardBody>
            {body}
        </CardBody>
    </CardContainer>
  )
}

export default Card

const CardTitle = styled.div`
    
`
const CardBody = styled.div`
    
`

const CardContainer = styled.div`
    width: 300px;
    overflow: hidden;
    box-shadow: 0px 0px 15px -5px;
`
const ImageContainer = styled.img`
    overflow: hidden;
    height: 200px;
`