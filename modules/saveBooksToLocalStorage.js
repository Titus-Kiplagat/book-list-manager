import books from './getBooksFromLocalStorage.js';

const saveBooksTolocalStorage = () => {
  localStorage.setItem('Books', JSON.stringify(books));
};

export default saveBooksTolocalStorage;