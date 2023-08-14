const getBooksFromLocalStorage = () => {
  const books = localStorage.getItem('Books');
  return books ? JSON.parse(books) : [];
};

const books = getBooksFromLocalStorage();

export default books;