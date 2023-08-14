import books from './getBooksFromLocalStorage.js';
import saveBooksTolocalStorage from './saveBooksToLocalStorage.js';

const removeBook = (index, renderBooks) => {
  books.splice(index, 1);

  saveBooksTolocalStorage();
  renderBooks();
};

export default removeBook;