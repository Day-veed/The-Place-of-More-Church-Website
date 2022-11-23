import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import './Ministries.css'

function Ministries(props) {
  const [isOpen, SetIsOpen] = useState(false);
  const [isOpenn, SetIsOpenn] = useState(false);
  const [isOpennn, SetIsOpennn] = useState(false);
  const [isOpennnn, SetIsOpennnn] = useState(false);
  const [isOpennnnn, SetIsOpennnnn] = useState(false);
  const [isOpennnnnn, SetIsOpennnnnn] = useState(false);
  const [isOpennnnnnn, SetIsOpennnnnnn] = useState(false);
  const [isOpennnnnnnn, SetIsOpennnnnnnn] = useState(false);
  const [isOpennnnnnnnn, SetIsOpennnnnnnnn] = useState(false);
  const [isOpennnnnnnnnn, SetIsOpennnnnnnnnn] = useState(false);
  const [isOpennnnnnnnnnn, SetIsOpennnnnnnnnnn] = useState(false);
  const [isOpennnnnnnnnnnnn, SetIsOpennnnnnnnnnnn] = useState(false);
  const [isOpennnnnnnnnnnnnn, SetIsOpennnnnnnnnnnnn] = useState(false);
  const [isOpennnnnnnnnnnnnnn, SetIsOpennnnnnnnnnnnnn] = useState(false);
  const [isOpennnnnnnnnnnnnnnn, SetIsOpennnnnnnnnnnnnnn] = useState(false);
  const [isOpennnnnnnnnnnnnnnnn, SetIsOpennnnnnnnnnnnnnnn] = useState(false);
  const [isOpennnnnnnnnnnnnnnnnn, SetIsOpennnnnnnnnnnnnnnnn] = useState(false);
  const [isOpennnnnnnnnnnnnnnnnnn, SetIsOpennnnnnnnnnnnnnnnnn] = useState(false);
  const [isOpennnnnnnnnnnnnnnnnnnn, SetIsOpennnnnnnnnnnnnnnnnnn] = useState(false);
  const [isOpennnnnnnnnnnnnnnnnnnnn, SetIsOpennnnnnnnnnnnnnnnnnnn] = useState(false);
  const [isOpennnnnnnnnnnnnnnnnnnnnn, SetIsOpennnnnnnnnnnnnnnnnnnnn] = useState(false);
  const [isOpennnnnnnnnnnnnnnnnnnnnnn, SetIsOpennnnnnnnnnnnnnnnnnnnnn] = useState(false);
  const [isOpennnnnnnnnnnnnnnnnnnnnnnn, SetIsOpennnnnnnnnnnnnnnnnnnnnnn] = useState(false);
  const [isOpennnnnnnnnnnnnnnnnnnnnnnnn, SetIsOpennnnnnnnnnnnnnnnnnnnnnnn] = useState(false);
  const [isOpennnnnnnnnnnnnnnnnnnnnnnnnn, SetIsOpennnnnnnnnnnnnnnnnnnnnnnnn] = useState(false);
  const [isOpennnnnnnnnnnnnnnnnnnnnnnnnnn, SetIsOpennnnnnnnnnnnnnnnnnnnnnnnnn] = useState(false);
  const [isOpennnnnnnnnnnnnnnnnnnnnnnnnnnn, SetIsOpennnnnnnnnnnnnnnnnnnnnnnnnnn] = useState(false);
  const [isOpennnnnnnnnnnnnnnnnnnnnnnnnnnnn, SetIsOpennnnnnnnnnnnnnnnnnnnnnnnnnnn] = useState(false);
  const [isOpennnnnnnnnnnnnnnnnnnnnnnnnnnnnn, SetIsOpennnnnnnnnnnnnnnnnnnnnnnnnnnnn] = useState(false);
  const [isOpennnnnnnnnnnnnnnnnnnnnnnnnnnnnnn, SetIsOpennnnnnnnnnnnnnnnnnnnnnnnnnnnnn] = useState(false);
  const [isOpennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn, SetIsOpennnnnnnnnnnnnnnnnnnnnnnnnnnnnnn] = useState(false);
  return (
    <>
    <D>
      <h1>
        Ministries
      </h1>
    </D>
    <Di>
     
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpen(!isOpen)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Revelation Worship Ministry</motion.h2>
          {isOpen && (
          <motion.div className='expand'>
            <p>
            Revealing God through Worship, Sound and Extoling his name.
            </p>
          </motion.div>
          )}
        </motion.div>
    
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpenn(!isOpenn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Media Ministry </motion.h2>
          {isOpenn && (
          <motion.div className='expand'>
            <p>
            To communicate the crystal clear message of Jesus Christ to nations, reaching and changing lives, renewing mindsets by giving glamour to the Gospel in captivating images, life transforming messages and soul lifting broadcasts whilst handling accurately the Word of truth for the hearers, readers and viewers.
            </p>
          </motion.div>
          )}
        </motion.div>
    
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennn(!isOpennn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Protocol Ministry</motion.h2>
          {isOpennn && (
          <motion.div className='expand'>
            <p>
              Maintaining orderliness in service; Maintaining orderliness in service; Maintaining orderliness in service.
            </p>
          </motion.div>
          )}
        </motion.div>

        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennnn(!isOpennnn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Facility Management Ministry </motion.h2>
          {isOpennnn && (
          <motion.div className='expand'>
            <p>
            Ensuring a clean and conducive facility.
            </p>
          </motion.div>
          )}
        </motion.div>
    
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennnnn(!isOpennnnn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Care Ministry </motion.h2>
          {isOpennnnn && (
          <motion.div className='expand'>
            <p>
            Meet, Greet and Honor Guest Ministers while extending care to members of the Church.
            </p>
          </motion.div>
          )}
        </motion.div>
    
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennnnnn(!isOpennnnnn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Publicity & Publication Ministry </motion.h2>
          {isOpennnnnn && (
          <motion.div className='expand'>
            <p>
            Creating Awareness and Publishing;
            </p>
          </motion.div>
          )}
        </motion.div>
    
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennnnnnn(!isOpennnnnnn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Protocol Ministry</motion.h2>
          {isOpennnnnnn && (
          <motion.div className='expand'>
            <p>
              Maintaining orderliness in service; Maintaining orderliness in service; Maintaining orderliness in service;
            </p>
          </motion.div>
          )}
        </motion.div>
    
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennnnnnnn(!isOpennnnnnnn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Ushering Ministry </motion.h2>
          {isOpennnnnnnn && (
          <motion.div className='expand'>
            <p>
            Receiving people to God’s presence excellently and excitedly;
            </p>
          </motion.div>
          )}
        </motion.div>
    
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennnnnnnnn(!isOpennnnnnnnn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">TPM Watchers Ministry </motion.h2>
          {isOpennnnnnnnn && (
          <motion.div className='expand'>
            <p>
            To Watch, Secure and Provide Security to members 
            </p>
          </motion.div>
          )}
        </motion.div>
    
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennnnnnnnnn(!isOpennnnnnnnnn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Pastoral Assistant Ministry </motion.h2>
          {isOpennnnnnnnnn && (
          <motion.div className='expand'>
            <p>
            Coordinate and Assist Pastors and Guest Pastors In, During and After Service.
            </p>
          </motion.div>
          )}
        </motion.div>
    
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennnnnnnnnnn(!isOpennnnnnnnnnn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Transport & Logistics Ministry </motion.h2>
          {isOpennnnnnnnnnn && (
          <motion.div className='expand'>
            <p>
            Management and movement of resources, ensuring proper mobility and traffic control in and around the church premises and conveying/ensuring the safety of members to their various destinations.
            </p>
          </motion.div>
          )}
        </motion.div>
    
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennnnnnnnnnnn(!isOpennnnnnnnnnnnn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Technical Ministry </motion.h2>
          {isOpennnnnnnnnnnnn && (
          <motion.div className='expand'>
            <p>
            Ensuring availability of audible sounds.
            </p>
          </motion.div>
          )}
        </motion.div>
    
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennnnnnnnnnnnn(!isOpennnnnnnnnnnnnn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Counselling Ministry </motion.h2>
          {isOpennnnnnnnnnnnnn && (
          <motion.div className='expand'>
            <p>
            Provide helpful resources for wellness.
            </p>
          </motion.div>
          )}
        </motion.div>
    
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennnnnnnnnnnnnn(!isOpennnnnnnnnnnnnnn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Medical Ministry</motion.h2>
          {isOpennnnnnnnnnnnnnn && (
          <motion.div className='expand'>
            <p>
            Providing Medical Care.
            </p>
          </motion.div>
          )}
        </motion.div>
    
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennnnnnnnnnnnnnn(!isOpennnnnnnnnnnnnnnn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Testimony Ministry </motion.h2>
          {isOpennnnnnnnnnnnnnnn && (
          <motion.div className='expand'>
            <p>
            Proclaiming the goodness of the Lord.
            </p>
          </motion.div>
          )}
        </motion.div>
    
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennnnnnnnnnnnnnnn(!isOpennnnnnnnnnnnnnnnn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Creativity Ministry. </motion.h2>
          {isOpennnnnnnnnnnnnnnnn && (
          <motion.div className='expand'>
            <p>
            Creating gospel media content that inspires and edifies.
            </p>
          </motion.div>
          )}
        </motion.div>
    
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennnnnnnnnnnnnnnnn(!isOpennnnnnnnnnnnnnnnnn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Sport Ministry. </motion.h2>
          {isOpennnnnnnnnnnnnnnnnn && (
          <motion.div className='expand'>
            <p>
            Utilizing Sports as tool for Evangelism
            </p>
          </motion.div>
          )}
        </motion.div>
    
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennnnnnnnnnnnnnnnnn(!isOpennnnnnnnnnnnnnnnnnn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Evangelism Ministry.</motion.h2>
          {isOpennnnnnnnnnnnnnnnnnn && (
          <motion.div className='expand'>
            <p>
            Reaching out to bring the lost and the multitude to Christ.
            </p>
          </motion.div>
          )}
        </motion.div>
   
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennnnnnnnnnnnnnnnnnn(!isOpennnnnnnnnnnnnnnnnnnn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Research & Development Ministry. </motion.h2>
          {isOpennnnnnnnnnnnnnnnnnnn && (
          <motion.div className='expand'>
            <p>
            Obtaining new information for improvement.
            </p>
          </motion.div>
          )}
        </motion.div>
    
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennnnnnnnnnnnnnnnnnnn(!isOpennnnnnnnnnnnnnnnnnnnn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Communications Ministry. </motion.h2>
          {isOpennnnnnnnnnnnnnnnnnnnn && (
          <motion.div className='expand'>
            <p>
            Giving general information.
            </p>
          </motion.div>
          )}
        </motion.div>
    
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennnnnnnnnnnnnnnnnnnnn(!isOpennnnnnnnnnnnnnnnnnnnnn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Communion Ministry.</motion.h2>
          {isOpennnnnnnnnnnnnnnnnnnnnn && (
          <motion.div className='expand'>
            <p>Ministering through Communion.
            </p>
          </motion.div>
          )}
        </motion.div>
    
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennnnnnnnnnnnnnnnnnnnnn(!isOpennnnnnnnnnnnnnnnnnnnnnn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Communications Ministry. </motion.h2>
          {isOpennnnnnnnnnnnnnnnnnnnnnn && (
          <motion.div className='expand'>
            <p>
            Giving general information.
            </p>
          </motion.div>
          )}
        </motion.div>
    
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennnnnnnnnnnnnnnnnnnnnnn(!isOpennnnnnnnnnnnnnnnnnnnnnnn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Census & Statistics Ministry . </motion.h2>
          {isOpennnnnnnnnnnnnnnnnnnnnnnn && (
          <motion.div className='expand'>
            <p>
            Systematically recording the numeric growth and reach of the church.
            </p>
          </motion.div>
          )}
        </motion.div>
    
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennnnnnnnnnnnnnnnnnnnnnnn(!isOpennnnnnnnnnnnnnnnnnnnnnnnn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Building Maintenance Ministry. </motion.h2>
          {isOpennnnnnnnnnnnnnnnnnnnnnnnn && (
          <motion.div className='expand'>
            <p>
            General repairs of all building infrastructure.
            </p>
          </motion.div>
          )}
        </motion.div>
    
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennnnnnnnnnnnnnnnnnnnnnnnn(!isOpennnnnnnnnnnnnnnnnnnnnnnnnn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Young of More. </motion.h2>
          {isOpennnnnnnnnnnnnnnnnnnnnnnnnn && (
          <motion.div className='expand'>
            <p>
            Influencing and engaging young people for kingdom advancement.
            </p>
          </motion.div>
          )}
        </motion.div>
    
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennnnnnnnnnnnnnnnnnnnnnnnnn(!isOpennnnnnnnnnnnnnnnnnnnnnnnnnn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Training Ministry. </motion.h2>
          {isOpennnnnnnnnnnnnnnnnnnnnnnnnnn && (
          <motion.div className='expand'>
            <p>
            Effectively training leaders.
            </p>
          </motion.div>
          )}
        </motion.div>
    
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennnnnnnnnnnnnnnnnnnnnnnnnnn(!isOpennnnnnnnnnnnnnnnnnnnnnnnnnnn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">Throne Room Ministry . </motion.h2>
          {isOpennnnnnnnnnnnnnnnnnnnnnnnnnnn && (
          <motion.div className='expand'>
            <p>
            Upholding the ministry in prayers.
            </p>
          </motion.div>
          )}
        </motion.div>
    
        <motion.div 
          transition={{Layout: {duration: 1, type: "spring"}}} 
          layout 
          onClick={() => SetIsOpennnnnnnnnnnnnnnnnnnnnnnnnnnn(!isOpennnnnnnnnnnnnnnnnnnnnnnnnnnnn)} 
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)",}}
        >
          <motion.h2 layout="position">MORE Network . </motion.h2>
          {isOpennnnnnnnnnnnnnnnnnnnnnnnnnnnn && (
          <motion.div className='expand'>
            <p>
            Reaching and Connecting Members outside Jos.
            </p>
          </motion.div>
          )}
        </motion.div>
    </Di>
    </>
  )
}

export default Ministries

const Card = styled.div`
  //max-width: 1150px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    //grid-gap: 40px;
    justify-content: center;
    align-items: center;
    grid-gap: 25px;
    padding: 0 50px;
    padding-top: 10px;
    width: 25rem;
    
    //width: 100%;
    
    /*>div{
      background: white;
    display: flex;
    
    justify-content: flex-start;
    align-items: center;
    //border-radius: 10px;
    //max-height: 340px;
    padding: 150px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    }*/
`

const Di = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
  padding: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;

  @media (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;
    }
    @media (max-width: 750px) {
            grid-template-columns: 1fr;
            grid-gap: 20px;
            padding: 30px;
            //margin: -20px;
        }

  >div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >h2{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      font-weight: 700;
      font-family: 'Raleway', sans-serif;
    }
    >div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: auto;
      >p{
        font-family: 'Tangerine', serif;
        font-size: 17px;
      }
    }
  }
  >p{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
`
const Dii = styled.div`
display: flex;
justify-content: center;
align-items: center;
  /*min-height: 100vh;
  margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 25px;
    padding: 0 50px;
    padding-top: 10px;*/
`
const D = styled.div`
  margin-top: 80px;
  height: 80px;
  background: #722f37;
  display: flex;
  justify-content: center;
  align-items: center;
  >h1{
    font-family: 'Playfair Display', serif;
    font-size: 50px;
    color: gold;
  }
`