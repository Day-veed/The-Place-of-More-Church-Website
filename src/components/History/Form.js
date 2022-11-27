import { Button } from '@mui/material'
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

import styled from 'styled-components'
import './Form.css'
import axios from 'axios';
import { useForm } from "react-hook-form";

function Form() {
    const [username, setUsername] = useState("")
    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
    const emailerr = "Please provide a valid email"
    const nameerr = "Please enter your full name"
    const numbererr = "This is a required question"
    const locationerr = "This is a required question"
    const aboutYouerr = "This is a required question"
    const radioerr = "This is a required question"
    const uploaderr = "Please submit your letter of recommendation"
 
    //const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [number, setNumber] = useState();
    const [location, setLocation] = useState();
    const [Church, setChurch] = useState();
    const [about, setAbout] = useState();
    const [select, setSelect] = useState();
    const [file, setFile] = useState();

    const state={
        email:'',
        name:'',
        number:'',
        location:'',
        Church:'',
        message:'',
        Avail:'',
        File:'',
        sent: false
    }

    //handle inputs
    const handleEmail=(e)=>{
        this.setState({
            name:e.target.email
        })
    }

    const handleName=(e)=>{
        this.setState({
            name:e.target.name
        })
    }

    const handleNumber=(e)=>{
        this.setState({
            name:e.target.number
        })
    }

    const handleLocation=(e)=>{
        this.setState({
            name:e.target.location
        })
    }

    const handleChurch=(e)=>{
        this.setState({
            name:e.target.Church
        })
    }

    const handleMessage=(e)=>{
        this.setState({
            name:e.target.message
        })
    }

    const handleAvail=(e)=>{
        this.setState({
            name:e.target.Avail
        })
    }

    const handleFile=(e)=>{
        this.setState({
            name:e.target.File
        })
    }
    //end of handle inputs

    console.log(username)

    const handleRadio = event => {

    }
    const sent = false

    const formSubmit=(e)=>{
        e.preventDefault();

        let data = {
            name: name,
            email: email,
            number: number,
            location : location,
            Church: Church,
            about: about,
            select: select,
            file: file
         }

         axios.post('/api/form', data)
         .then(res=>(
            this.setState({
                sent:true,
            },this.resetForm())
         )).catch(()=>{
            console.log('Message not sent')
         })
    }

    //for reseting initial data
    const resetForm=()=>{
        this.setState({
            name:'',
            email: '',
            number: '',
            location : '',
            Church: '',
            about: '',
            select: '',
            file: null
        })

        setTimeout(()=>{
            this.setState({
                sent:false,
            })
        }, 3000)
    }

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_cniyvjp', 'template_czxpl6h', form.current, 'qy6fvb2VC_0YK6x9-')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  

  return (
    /*<form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>*/
    <div className='sendMail' ref={form} onSubmit={reset}>
        <div className='sendMail__header'>
            <H3>Registration Form</H3>
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input onChange={e=>setEmail(e.target.value)} name="user_email" placeholder="Email" type="text" required  />
            <span>{/*emailerr*/}</span>

            <input onChange={e=>setName(e.target.value)} name="user_name" placeholder="Full Name" type="text" required pattern='^[A-Za-z0-9]{3,16}$' />
            <span>{/*nameerr/*}</span>

            <input onChange={e=>setNumber(e.target.value)} name='WNum' placeholder="Whatsapp Number" type="number" required />
            <span>{/*numbererr*/}</span>

            <input onChange={e=>setLocation(e.target.value)} name='Location' placeholder="Location" type="text" required />
            <span>{/*locationerr*/}</span>

            <input onChange={e=>setChurch(e.target.value)} name='Church' placeholder="What Church Do You Attend?" type="text" />

            <textarea onChange={e=>setAbout(e.target.value)} name="message" placeholder="Tell Us About Yourself Briefly" type="text" className='sendMail__message' required cols="30" rows="5"/>
            <span>{/*aboutYouerr*/}</span>

            <p>
                <h4>Will You Be Available For All The Trainings?</h4>
                <div>
                    Yes<input onChange={e=>setSelect(e.target.value)} name={select} type="radio" value="Yes" />
                    No<input onChange={e=>setSelect(e.target.value)} name={select} type="radio" value="No"/>
                </div>
            </p>
            <span>{/*radioerr*/}</span>
            <p>
                <h3>UPLOAD YOUR LETTER OF RECOMMENDATION. (If you are not a member of The Place of More Church)</h3>
                <input name="File" onChange={e=>setFile(e.target.value)} placeholder="Will You Be Available For All The Trainings?" type="file"/>
            </p>
            <span>{/*uploaderr*/}</span>

            <div className='sendMail__options'>
                <Button
                    className="sendMail__send"
                    variant="contained"
                    color="primary"
                    background-color= "#722f37"
                    type="submit"
                    value="Send"
                >
                    Submit
                </Button>
            </div>

  </form>
    </div>
        
    
    /*<form>
            <FormInput placeholder="Email" setUsername/>

            <FormInput placeholder="Full Name"/>

            <FormInput placeholder="Whatsapp Number"/>

            <FormInput placeholder="Location"/>

            <FormInput placeholder="What Church Do You Attend?"/>

            <FormInput placeholder="Tell Us About Yourself Briefly"/>

            <FormInput placeholder="Will You Be Available For All The Trainings?"/>

            <FormInput placeholder="Will You Be Available For All The Trainings?"/>

            <button   type='submit' /*onClick={/*loginToApp****>Register</button>
  </form>*/
  )
}

export default Form

const H3 = styled.div`
    color: lightblue;
    font-size: 33px;
    font-family: 'Playfair Display', serif;
    @media screen and (max-width: 400px){
        font-size: 20px;
    }
`
