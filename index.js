const getBooksFromLocalStorage = () => {
  const books = localStorage.getItem('Books');
  return books ? JSON.parse(books) : [];
};

const saveBooksTolocalStorage = (books) => {
  localStorage.setItem('Books', JSON.stringify(books));
};