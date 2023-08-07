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