const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links");
/* const chevron = document.querySelectorAll(".chevron"); */

const sectionHandler = (currentSection) => {
  navLinks.forEach((link) => {
    if (link.dataset.section === currentSection) {
      link.classList.add("active");
      return;
    }
    link.classList.remove("active");
  });
  /* chevron.forEach((btn) => {
    if (btn.dataset.section === currentSection) {
      return;
    }
  }); */
};

const sectionCallback = (section) => {
  section.forEach((section) => {
    if (!section.isIntersecting) {
      return;
    }
    sectionHandler(section.target.id);
  });
};

const sectionOptions = {
  threshold: 0.5,
};

const getSection = new IntersectionObserver(sectionCallback, sectionOptions);

sections.forEach((section) => {
  getSection.observe(section);
});
