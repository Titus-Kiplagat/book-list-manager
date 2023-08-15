import handleNavLinkClick from './handleNavLinkClick.js';

const handleDomContentLoad = () => {
  document.addEventListener('DOMContentLoaded', () => handleNavLinkClick());
};

export default handleDomContentLoad;
