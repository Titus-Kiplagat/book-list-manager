class BookManager {
  constructor() {
    this.books = this.getBooksFromLocalStorage();
  }

  saveBooksTolocalStorage = () => {
    localStorage.setItem('Books', JSON.stringify(this.books));
  };

  getBooksFromLocalStorage = () => {
    const books = localStorage.getItem('Books');
    return books ? JSON.parse(books) : [];
  };

  renderBooks = () => {
    const tableBody = document.getElementById('tbody');
    tableBody.innerHTML = '';

    this.books.forEach((book, index) => {
      const tableRow = `
      <tr>
        <td>${book.title} by ${book.author}</td>
        <td class="text-end">
          <button class="btn btn-outline-dark btn-sm border-4 px-4 delete-button" id="${index}">
            Delete
          </button>
        </td>
      </tr>
    `;
      tableBody.insertAdjacentHTML('beforeend', tableRow);
    });

    this.handleDeleteButtonClick();
  };

  handleDeleteButtonClick = () => {
    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const buttonId = event.target.id;
        const index = parseInt(buttonId, 10);
        if (!Number.isNaN(index)) {
          this.removeBook(index);
        }
      });
    });
  };

  addBooks = (event) => {
    event.preventDefault();
    const bookTitle = document.getElementById('title-input').value.trim();
    const bookAuthor = document.getElementById('author-input').value.trim();

    if (bookTitle && bookAuthor) {
      const newBook = { title: bookTitle, author: bookAuthor };
      this.books.unshift(newBook);
      this.saveBooksTolocalStorage();
      this.renderBooks();

      document.getElementById('title-input').value = '';
      document.getElementById('author-input').value = '';
    }
  };

  removeBook = (index) => {
    this.books.splice(index, 1);

    this.saveBooksTolocalStorage();
    this.renderBooks();
  };

  handleFormSubmit = () => {
    document.getElementById('form').addEventListener('submit', this.addBooks);
  };

  handleAddButtonClick = () => {
    document
      .getElementById('add-button')
      .addEventListener('click', this.addBooks);
  };

  totalBooksCount = () => this.books.length;
}

const bookManager = new BookManager();

export default bookManager;