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