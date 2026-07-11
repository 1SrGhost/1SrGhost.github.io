const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!reducedMotion.matches && "IntersectionObserver" in window) {
  document.documentElement.classList.add("js-animations");

  const groups = [
    [".section-head", 0],
    [".work-card", 70],
    [".store-card", 70],
    [".experience-item", 90],
    [".stack-card", 80],
    [".contact-card", 0],
  ];

  const animatedElements = groups.flatMap(([selector, stagger]) =>
    [...document.querySelectorAll(selector)].map((element, index) => {
      element.classList.add("reveal");
      if (!element.classList.contains("section-head")) {
        element.classList.add("reveal--scale");
      }
      element.style.setProperty("--reveal-delay", `${(index % 4) * stagger}ms`);
      return element;
    }),
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.12 },
  );

  animatedElements.forEach((element) => observer.observe(element));
}
