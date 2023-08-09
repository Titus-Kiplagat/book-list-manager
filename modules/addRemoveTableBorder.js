import bookManager from './bookManager.js';

const addRemoveTableBorder = () => {
  const totalCount = bookManager.totalBooksCount();
  const table = document.querySelector('.table');

  if (totalCount === 0) {
    table.classList.add('table-border-outside-none');
    table.classList.remove('table-border-outside');
  }

  table.classList.remove('table-border-outside-none');
  table.classList.add('table-border-outside');
};

export default addRemoveTableBorder;