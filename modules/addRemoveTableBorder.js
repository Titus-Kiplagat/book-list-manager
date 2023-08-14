import totalBooksCount from './totalBooksCount.js';

const addRemoveTableBorder = () => {
  const totalCount = totalBooksCount();
  const table = document.querySelector('.table');

  if (totalCount === 0) {
    table.classList.add('table-border-outside-none');
    table.classList.remove('table-border-outside');
  }

  table.classList.remove('table-border-outside-none');
  table.classList.add('table-border-outside');
};

export default addRemoveTableBorder;