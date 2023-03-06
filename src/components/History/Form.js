import { Button } from '@mui/material'
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

import styled from 'styled-components'
import './Form.css'
import axios from 'axios';
import { useForm } from "react-hook-form";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {v4} from "uuid";
import {storage} from '../../firebase.js';
import { toast } from 'react-toastify';


function Form() {
    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
 
    //const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [number, setNumber] = useState();
    const [location, setLocation] = useState();
    const [Church, setChurch] = useState();
    //const [about, setAbout] = useState();
    //const [select, setSelect] = useState();
    const [file, setFile] = useState(null);
    const [available, setAvailable] = useState('');
    const [taken, setTaken] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    
    const [attachmentUploading, setAtttachmentUploading] = useState(false);



    const formSubmit=(e)=>{
        e.preventDefault();

        let data = {
            name: name,
            email: email,
            number: number,
            location : location,
            Church: Church,
            //about: about,
            //select: select,
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


    const form = useRef();

    const sendEmail = async (e) => {
   try {
    toast.promise(async()=>{
        e.preventDefault();
        const attachmentUrl = await uploadFiles(file)
        console.log({attachmentUrl})
        const templateParams = {
          email,
          name,
          Church,
          number,
          location,
          available,
          taken,
          month,
          year,
          attachment: attachmentUrl
        }
    
        await emailjs.send('service_94g7caf', 'template_4zphgem', templateParams, '8acUK6-l_MoCYn9p0')
        setEmail('')
        setName('')
        setChurch('')
        setNumber('')
        setLocation('')
        setAvailable('')
        setTaken('')
        setMonth('')
        setYear('')
        setFile(null)
        uncheckFunction()
          
    }, {
        pending: "Sending Email...",
        success: "Email sent successfully",
        error: "Failed to send Email. Please try again"
    })
  
   } catch (error) {
    console.log((error))
   }

    };

    const uncheckFunction = () => {
        let allRadioButtons = document.querySelectorAll('.radioB');
        allRadioButtons.forEach(value=> value.checked = false);
    }
  
    const uploadFiles = async (file) => {
        if (!file) return;
        return new Promise((resolve, reject) => {
        setAtttachmentUploading(true);
        const storageRef =  ref(storage, `/files/${file.name}`);
        const uploadTask =  uploadBytesResumable(storageRef, file);
    
        
    
        uploadTask.on("state_changed", (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
              console.log({prog})

        }, 
        (err) => {
          console.log(err)
          setAtttachmentUploading(false);
          reject(err)
        },
        async () => {
         const url =  await getDownloadURL(uploadTask.snapshot.ref);
        
        console.log({url})
         resolve(url)
        }
        );
        })
      }

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
            <input onChange={e=>setEmail(e.target.value)} name="user_email" value={email}placeholder="Email" type="text" required  />
            

            <input onChange={e=>setName(e.target.value)} value={name} placeholder="Full Name" type="text" required />
           

            
            
            <input id='phone_number' name='phone_number' value={number} type='tel' placeholder="Whatsapp Number" onChange={(e)=>setNumber(e.target.value)} required/>

            <input onChange={e=>setLocation(e.target.value)} name='location' value={location}placeholder="location" type="text" required />
            
            <input onChange={e=>setChurch(e.target.value)} name='Church' value={Church}placeholder="What Church Do You Attend?" type="text" required />

            {/*<textarea onChange={e=>setAbout(e.target.value)} name="message" placeholder="Tell Us About Yourself Briefly" type="text" className='sendMail__message' required cols="30" rows="5"/>*/}
            
            <p>
                <h4>Have you taken our Leadership Training Course(LTC)?</h4>
                <div>
                    Yes<input  name='radio' className='radioB' type="radio"  value={taken} onChange={(e)=>setTaken('Yes')}/><span/>
                    No<input  name='radio' className='radioB' type="radio" value={taken} onChange={(e)=>setTaken('No')}/>
                </div>
            </p>

            <p>
                <h4>If you have taken our Leadership Training Course(LTC), What month and year did you take the course?</h4>
                <div>
                    <div>
                    <div>Month<span/><select value={month} onChange={e=>setMonth(e.target.value)}>
                        <option></option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>Octorber</option>
                        <option>November</option>
                        <option>December</option>
                    </select></div>
                    <span> </span>
                    <div>Year<span/><select value={year} onChange={e=>setYear(e.target.value)}>
                        <option></option>
                        <option>2023</option>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
                        <option>2015</option>
                        <option>2014</option>
                    </select></div>
                    </div>
                </div>
            </p>

            <p>
                <h4>Will You Be Available For All MTC Trainings?</h4>
                <div>
                    Yes<input  name='radi' className='radioB' type="radio"  value={available} onChange={(e)=>setAvailable('Yes')}/><span/>
                    No<input  name='radi' className='radioB' type="radio" value={available} onChange={(e)=>setAvailable('No')}/>
                </div>
            </p>
            
            <p>
                <h3>UPLOAD YOUR LETTER OF RECOMMENDATION. (If you are not a member of The Place of More Church)</h3>
                <input name="File" value={null} onChange={(e)=>setFile(e.target.files[0])} placeholder="Will You Be Available For All The Trainings?" type="file"/>
            </p>
           

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
