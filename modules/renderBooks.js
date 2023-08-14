import books from './getBooksFromLocalStorage.js';
import handleDeleteButtonClick from './handleDeleteButtonClick.js';
import removeBook from './removeBook.js';

const renderBooks = () => {
  const tableBody = document.getElementById('tbody');
  tableBody.innerHTML = '';

  books.forEach((book, index) => {
    const tableRow = `
      <tr>
        <td>${book.title} by ${book.author}</td>
        <td class="text-end">
          <button class="btn btn-outline-dark btn-sm border-4 px-4 delete-button" id="${index}})">
            Delete
          </button>
        </td>
      </tr>
    `;
    tableBody.insertAdjacentHTML('beforeend', tableRow);
  });
  handleDeleteButtonClick((index) => removeBook(index, renderBooks));
};

export default renderBooks;