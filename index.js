import addRemoveTableBorder from './modules/addRemoveTableBorder.js';
import bookManager from './modules/bookManager.js';
import handleNavLinkClick from './modules/handleNavLinkClick.js';
import displayDateAndTime from './modules/displayDateAndTime.js';

addRemoveTableBorder();
document.addEventListener('DOMContentLoaded', () => handleNavLinkClick());
bookManager.handleFormSubmit();
bookManager.handleAddButtonClick();
bookManager.renderBooks();
displayDateAndTime();
