import books from './getBooksFromLocalStorage.js';
import renderBooks from './renderBooks.js';
import saveBooksTolocalStorage from './saveBooksToLocalStorage.js';

const addBooks = (event) => {
  event.preventDefault();
  const bookTitle = document.getElementById('title-input').value.trim();
  const bookAuthor = document.getElementById('author-input').value.trim();

  if (bookTitle && bookAuthor) {
    const newBook = { title: bookTitle, author: bookAuthor };
    books.unshift(newBook);
    saveBooksTolocalStorage();
    renderBooks();

    document.getElementById('title-input').value = '';
    document.getElementById('author-input').value = '';
  }
};

export default addBooks;