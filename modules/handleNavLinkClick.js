const handleNavLinkClick = () => {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = event.target.getAttribute('href');
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        section.style.display = 'none';
      });

      document.querySelector(target).style.display = 'block';
      window.location.href = target;
    });
  });
};

export default handleNavLinkClick;