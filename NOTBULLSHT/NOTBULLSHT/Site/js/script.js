document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".roupas");
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 200); // Ajuste o atraso conforme necessário
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  items.forEach((item) => {
    observer.observe(item);
  });
});
