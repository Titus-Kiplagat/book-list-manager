// import removeBook from './removeBook.js';

const handleDeleteButtonClick = (removeBook) => {
  const deleteButtons = document.querySelectorAll('.delete-button');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const buttonId = event.target.id;
      const index = parseInt(buttonId, 10);
      if (!Number.isNaN(index)) {
        removeBook(index);
      }
    });
  });
};

export default handleDeleteButtonClick;