import React, { Component } from 'react';

/*class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = e => {
    if(e.target.files[0]) {
      const {image} = this.state;
      this.setState(() => ({image}));
    }
  }
  render() {
    const style = {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    };
    
    return (
      <div style={style}>
        <input type="file" onChange={this.handleChange}/>
        <button>Upload</button>
      </div>
    )
  }
}*/
import styled from 'styled-components'
import {useState, useEffect} from "react";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import {v4} from "uuid";
import { storage } from '../../../firebase';
import ProgressBar from '../../hooks/progressBar';
// { ProgressBar } from 'react-bootstrap';

function Resources() {
  const [imageList, setImageList] = useState([]);
  const [imageUpload, setImageUpload] = useState(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  
  const imageListRef = ref(storage, "image/")
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image Uploaded");
    })
  };

  useEffect (() => {
    listAll(imageListRef).then((response)=>{
      response.items.forEach((item)=>{
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        })
      })
    })
  }, []);

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
  }
  
  return (
    <>
    <D>
      <h1>
        Ministry Resources
      </h1>
    </D>
    <Div>
      {/*<input 
      type="file" 
      onChange={changeHandler}
      />
      {/*<button onClick={uploadImage}>Upload Image</button>******

      {error && <div className='error'>{error}</div>}
      {file && <div>{ file.name }</div>}
      {file && <ProgressBar  file={file} setFile={setFile}/> }

      {/*imageList.map((url) => {
        return <img src={url} />
      })****
      <h1>Audio</h1>
      <Audio>
        <h3>well</h3>
        <h3>well</h3>
      </Audio>*/}
    </Div>
    </>
  )
}

export default Resources

const Audio = styled.div`
display: flex;
justify-content: space-evenly;
align-items: flex-start;
  background: lightslategray;
  height: auto;
  width: 80%;
  border-radius: 15px;
  padding: 20px;
`

const Div = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  @media (max-width: 450px) {
      >h1 {
        font-size: 35px;
      }  
    }
`