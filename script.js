// Small enhancement: gently mark the navigation item for the section in view.
const sections = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll(".nav a");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(link => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${entry.target.id}`
      );
    });
  });
}, { rootMargin: "-30% 0px -60% 0px" });

sections.forEach(section => observer.observe(section));
