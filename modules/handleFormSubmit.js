import addBooks from './addBooks.js';

const handleFormSubmit = () => {
  document.getElementById('form').addEventListener('submit', addBooks);
};

export default handleFormSubmit;