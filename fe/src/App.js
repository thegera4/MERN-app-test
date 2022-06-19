import REACT, {useEffect, useState} from 'react';
import './App.css';
import { getBooksAPI, addBookAPI, updateBookAPI, deleteBookAPI } from './apis/books';
import TableBook from './TableBook';
import CreateBook from './CreateBook';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooksAPI().then(books => setBooks(books));
  }, []);

  const addBook = book => {
    return addBookAPI(book).then(book => setBooks([...books, book]));
  }

  const updateBook = book => {
    return updateBookAPI(book).then(book => {return book});
  }

  const deleteBook = id => {
    return deleteBookAPI(id).then(book => {
      if(book.deletedCount === 1){
        setBooks(books.filter(book => book._id !== id));
      }
    })
  }
  
  return (
    <div className="App">
      <CreateBook onCreate={addBook} />
      <TableBook books={books} onUpdate={updateBook} onDelete={deleteBook} />
    </div>
  );
}

export default App;
