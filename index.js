const getBooksFromLocalStorage = () => {
  const books = localStorage.getItem('Books');
  return books ? JSON.parse(books) : [];
};