document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".fade-up, .slide-in");
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
