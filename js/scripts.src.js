/*!
 * Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
window.addEventListener("DOMContentLoaded", (e) => {
  document.body.querySelector("#sideNav") &&
    new bootstrap.ScrollSpy(document.body, { target: "#sideNav", offset: 74 });
  const o = document.body.querySelector(".navbar-toggler");
  [].slice
    .call(document.querySelectorAll("#navbarResponsive .nav-link"))
    .map(function (e) {
      e.addEventListener("click", () => {
        "none" !== window.getComputedStyle(o).display && o.click();
      });
    });
});
