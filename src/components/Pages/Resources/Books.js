import {useEffect, useState} from "react";
import styled from "styled-components";
import {db} from "../../../firebase";
import './Books.css';
import Senses from './Spiritual_Senses.jpg';
import intelligence from './Spiritual_Intelligence.jpg';
import Technologies from './Spiritual_Technologies.jpg';
import Warfare from './Spiritual_Warfare.jpg';
import Ranking from './Spiritual_Ranking.jpg';
import Cow from './COW.jpg';
import WoW from './Waiting_or_Wasting.jpg';
import NavIconOption from "./NavIconOption";
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Books = () => {
//    fetch books from firestore
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            try {
                const unsubscribe = db.collection("files").onSnapshot((snapshot) => {
                    const books = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setBooks(books);

                });
                return unsubscribe;
            } catch (e) {
                console.log({e})
            } finally {
                setLoading(false);
            }
        }
        , []);

    return (
        <>
            <D>
                <h1>
                    Ministry Books
                </h1>
            </D>

            <div className="container">
                <div className="cont">
                {loading ? <p>Loading...</p> : books.map((book) => (
                    <div key={book.id} className='con'>
                        <img style={{
                            
                        }} src={book.imageUrl} alt={book.bookName}/>
                        <h2>Book Name: {book.bookName}</h2>
                        <a href={book.bookUrl} target={'_blank'}>Download Book</a>

                    </div>
                ))}
                </div>
            </div>
            <div className="images">
                <img src={Senses} alt='' />
                <img src={Ranking} alt='' />
                <img src={intelligence} alt='' />
                <img src={Technologies} alt='' />
                <img src={Warfare} alt='' />
                <img src={Cow} alt='' />
                <img src={WoW} alt='' />
            </div>
            <IconBtn>
                <a href="https://www.facebook.com/Theplaceofmore/">
                <NavIconOption Icon={FacebookIcon} title="Facebook" />
                </a>
                <a href="https://t.me/theeveningchurchTPM">
                <NavIconOption Icon={TelegramIcon} title="Telegram" />
                </a>
                <a href="https://instagram.com/theeveningchurch_tpm?igshid=YmMyMTA2M2Y=">
                <NavIconOption Icon={InstagramIcon}  title="Instagram" />
                </a>
                <a href="https://www.youtube.com/channel/UCVm83thLs-WavYc5ANXitFw">
                <NavIconOption Icon={ YouTubeIcon} title="Youtube" />
                </a>
            </IconBtn>
        </>
    );

}

export default Books;

const D = styled.div`
  margin-top: 80px;
  height: 80px;
  background: #722f37;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -100px;
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
export const IconBtn = styled.div`
    display: flex;
    flex: 0.2;
    justify-content: flex-end;
    align-items: center;
    padding-left: 20px;

    >a{
        text-decoration: none;
    }
    

    @media screen and (max-width: 1100px) {
        display: none;
    }
`
export const NavIconOptions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
    color: #722f37;
    cursor: pointer;

    &:hover {
        transition: all 0.3 ease-in-out;
        color: gold;
    }
`