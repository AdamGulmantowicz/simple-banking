import auth from "../controllers/auth.js";
import router from "../controllers/router.js";

export default function renderNavigation(isLoggedIn = false) {
  const navigationEl = document.getElementById("navigation");

  navigationEl.innerHTML = /* html */ `
    <a class="nav__item" href="#/">
      <svg class="icon">
        <use xlink:href="./images/symbol-defs.svg#icon-home" />
      </svg>
    </a>
    ${
      isLoggedIn
        ? /* html */ `
        <a class="nav__item" id="sign-out">
          Sign Out
        </a>`
        : /* html */ `
        <a class="nav__item" href="#/login">
          Log in
        </a>
        <a class="nav__item" href="#/register">
          Sign Up
        </a>`
    }
  `;

  if (isLoggedIn) {
    document.querySelector("#sign-out").addEventListener("click", function (e) {
      e.preventDefault();
      auth.signout();
    });
  }

  Array.from(document.querySelectorAll("[data-goto]")).forEach((el) => {
    el.addEventListener("click", function () {
      router.goTo(el.getAttribute("data-goto"));
    });
  });
}
