const getBooksFromLocalStorage = () => {
  const books = localStorage.getItem('Books');
  return books ? JSON.parse(books) : [];
};

const saveBooksTolocalStorage = (books) => {
  localStorage.setItem('Books', JSON.stringify(books));
};

function CreateBookObject(title, author) {
  this.title = title;
  this.author = author;
}

const addBooks = () => {
  const bookTitle = document.getElementById('title-input').value.trim();
  const bookAuthor = document.getElementById('author-input').value.trim();

  if (bookTitle && bookAuthor) {
    const books = getBooksFromLocalStorage();
    const book = new CreateBookObject(bookTitle, bookAuthor);
    books.unshift(book);
    saveBooksTolocalStorage(books);

    document.getElementById('title-input').value = '';
    document.getElementById('author-input').value = '';
  }
};

const renderBooks = () => {
  const books = getBooksFromLocalStorage();
  const tableBody = document.getElementById('tbody');
  tableBody.innerHTML = '';

  books.forEach((book, index) => {
    const tableRow = `
      <tr>
        <td>${book.title} by ${book.author}</td>
        <td class="text-end">
          <button class="btn btn-danger btn-sm" onclick="removeBook(${index})">
            delete
          </button>
        </td>
      </tr>
    `;
    tableBody.insertAdjacentHTML('beforeend', tableRow);
  });
};

const removeBook = (index) => {
  const books = getBooksFromLocalStorage();
  books.splice(index, 1);

  saveBooksTolocalStorage(books);
  renderBooks();
};

const handleFormSubmit = () => {
  document.getElementById('form').addEventListener('submit', addBooks);
};

const handleButtonClick = () => {
  document.getElementById('add-button').addEventListener('click', addBooks);
};

handleFormSubmit();
handleButtonClick();
renderBooks();