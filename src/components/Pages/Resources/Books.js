import {useEffect, useState} from "react";
import {db} from "../../../firebase";

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
        <div>
            <h1>All Books</h1>
            {loading ? <p>Loading...</p> : books.map((book) => (
                <div key={book.id}>
                    <h2>Book Name: {book.bookName}</h2>
                    <img style={{
                        width: '300px',
                        height: '300px'
                    }} src={book.imageUrl} alt={book.bookName}/>
                    <a href={book.bookUrl} target={'_blank'}>Download Book</a>

                </div>
            ))}
        </div>
    );

}

export default Books;