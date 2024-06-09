// Navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links");

const sectionHandler = (currentSection) => {
  navLinks.forEach((link) => {
    if (link.dataset.section === currentSection) {
      link.classList.add("active");
      return;
    }
    link.classList.remove("active");
  });
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

// modal
const modal = document.getElementById("modal");
const btn = document.querySelector(".more-btn");

function toggleModal() {
  modal.classList.toggle("show");
}

function showModal() {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleModal();
  });

  document.documentElement.addEventListener("click", (e) => {
    if (modal.classList.contains("show")) {
      toggleModal();
    }
  });
}

showModal();
