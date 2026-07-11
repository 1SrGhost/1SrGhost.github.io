document.documentElement.classList.add("js");

const header = document.querySelector(".nav");
const toggle = document.querySelector(".nav__toggle");
const navigation = document.querySelector("#primary-navigation");
const desktopBreakpoint = window.matchMedia("(min-width: 981px)");

if (header && toggle && navigation) {
  const setMenuState = (isOpen, restoreFocus = false) => {
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación",
    );
    navigation.dataset.open = String(isOpen);
    document.body.classList.toggle("menu-open", isOpen);

    if (restoreFocus) toggle.focus();
  };

  toggle.addEventListener("click", () => {
    setMenuState(toggle.getAttribute("aria-expanded") !== "true");
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuState(false);
  });

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) setMenuState(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenuState(false, true);
    }
  });

  desktopBreakpoint.addEventListener("change", (event) => {
    if (event.matches) setMenuState(false);
  });
}
