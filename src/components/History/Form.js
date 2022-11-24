import { Button } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import './Form.css'
import { useForm } from "react-hook-form";

function Form() {
    const [username, setUsername] = useState("")
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    console.log(username)
  return (
    <div className='sendMail'>
        <div className='sendMail__header'>
            <H3>Registration Form</H3>
        </div>
        <form>
            <input name='email' placeholder="Email" type="text" ref={register({required:true})}/>

            <input name='name' placeholder="Full Name" type="text" ref={register({required:true})}/>

            <input name='WNumber' placeholder="Whatsapp Number" type="number" ref={register({required:true})}/>

            <input name='location' placeholder="Location" type="text" ref={register({required:true})}/>

            <input name='Church' placeholder="What Church Do You Attend?" type="text" ref={register({required:true})}/>

            <input name='aboutYou' placeholder="Tell Us About Yourself Briefly" type="text" className='sendMail__message' ref={register({required:true})}/>

            <p>
                <h4>Will You Be Available For All The Trainings?</h4>
                <div>Yes<input name='yes' type="radio" value="Yes" /></div>
                <div>No<input name='no' type="radio" value="No"/></div>
            </p>
            <p>
                <h3>UPLOAD YOUR LETTER OF RECOMMENDATION. (If you are not a member of The Place of More Church)</h3>
                <input name='file' placeholder="Will You Be Available For All The Trainings?" type="file"/>
            </p>

            <div className='sendMail__options'>
                <Button
                    className="sendMail__send"
                    variant="contained"
                    color="primary"
                    background-color= "#722f37"
                    type="submit"
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
