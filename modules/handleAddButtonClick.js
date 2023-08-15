import addBooks from './addBooks.js';

const handleAddButtonClick = () => {
  document
    .getElementById('add-button')
    .addEventListener('click', addBooks);
};

export default handleAddButtonClick;