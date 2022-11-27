import React, { Component } from 'react';
import {addDoc, collection} from "firebase/firestore";

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
import { ref, uploadBytes, listAll, getDownloadURL, uploadBytesResumable, list } from "firebase/storage";
import {v4} from "uuid";
import {db, storage, storageRef} from '../../../firebase';
import Books from "./Books";
// { ProgressBar } from 'react-bootstrap';

function Resources() {
  const [imageList, setImageList] = useState([]);
  const [progress, setProgress] = useState(0);

  const [data, setData] = useState([]);


  const [imageUploading, setImageUploading] = useState(false);
  const [bookUploading, setBookUploading] = useState(false);
  // book image and pdf

  const [imageUrl, setImageUrl] = useState(null);
  const [bookUrl, setBookUrl] = useState(null);
  const [name, setName] = useState('');

  const imageListRef = ref(storage, "image/")

  const isUploadingData = imageUploading || bookUploading;

  const uploadImageToStorage = (file) => {
    setImageUploading(true);
    const imageName = v4();
    const uploadTask = uploadBytesResumable(ref(storage, `image/${imageName}`), file);
    console.log({uploadTask});
    uploadTask.on('state_changed', (snapshot) => {
      console.log({snapshot})
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log({progress})
      setProgress(progress);
    }, (error) => {
      console.log(error);
      setImageUploading(false);
    }, async () => {
     const url = await getDownloadURL(uploadTask.snapshot.ref)
      setImageUrl(url);
      setImageUploading(false);
    });
  }

  useEffect (() => {
    listAll(imageListRef).then((response)=>{
      response.items.forEach((item)=>{
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        })
      })
    })
  }, []);
  
  const uploadFiles = (file) => {
    if (!file) return;
    setBookUploading(true);
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    

    uploadTask.on("state_changed", (snapshot) => {
      const prog = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
          console.log({prog})

      setProgress(prog);
    }, 
    (err) => {
      console.log(err)
      setBookUploading(false);
    },
    async () => {
     const url =  await getDownloadURL(uploadTask.snapshot.ref);
      console.log({url})
      setBookUrl(url);
      setBookUploading(false);
    }
    );
  }

  const saveDocumentToFirestore = async () => {

    if(!imageUrl || !bookUrl) return alert('Please upload image and book');

    console.log({imageUrl, bookUrl})
    const docRef = await addDoc(collection(db, "files"), {
      bookName: name,
      bookUrl,
      imageUrl,
      downloads : 0,
      createdAt: new Date()
    });
    console.log("Document written with ID: ", docRef.id);
  }

  return (
    <>
    <D>
      <h1>
        Ministry Resources
      </h1>
    </D>
    <Div>
      <form>

        <input type="text" placeholder={'enter name of your book'} onChange={(e)=>setName(e.target.value)} value={name} name="name" id="name"/>
        <label htmlFor="cover-image" >Upload cover image</label>
        <input onChange={(e)=>uploadImageToStorage(e.target.files[0])} accept="image/*" name={'cover-image'} type="file" className="input" />
        <input onChange={(e)=>uploadFiles(e.target.files[0])} name={'book'} type="file" className="input" />
        <button disabled={isUploadingData} onClick={saveDocumentToFirestore} type='button'>{isUploadingData ? 'Uploading data' : 'Save'}</button>
      </form>
      <hr />

      <h3>Uploaded {progress} % </h3>


      <Books />


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