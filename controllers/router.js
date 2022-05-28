import accountPage from "../views/accountPage.js";
import homePage from "../views/homePage.js";
import loginPage from "../views/loginPage.js";
import renderNavigation from "../views/navigation.js";
import registerPage from "../views/registerPage.js";
import auth from "./auth.js";

function handlePageRequest(title = "", renderFunction) {
  renderNavigation(auth.isLoggedIn);
  const rootEl = document.querySelector("main");
  const h1El = document.querySelector("h1");
  rootEl.innerHTML = renderFunction();
  h1El.innerText = title;
}

const router = {
  goTo(pageName) {
    this.routes[pageName]();
  },
  routes: {
    "/": function () {
      handlePageRequest("Welcome to our banking app!", homePage);
    },
    "/login": function () {
      if (auth.isLoggedIn) {
        router.goTo("/account");
        return;
      }
      handlePageRequest("Login", loginPage);

      const loginForm = document.getElementById("loginForm");

      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(loginForm);
        const email = formData.get("email");
        const password = formData.get("password");
        // logika logowania
        const user = auth.login({
          email,
          password,
        });
        loginForm.reset();
        if (user && auth.isLoggedIn) {
          router.goTo("/account");
        }
      });
    },
    "/register": function () {
      if (auth.isLoggedIn) {
        router.goTo("/account");
        return;
      }
      handlePageRequest("Register", registerPage);
      const registerForm = document.getElementById("signupForm");

      registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(registerForm);
        const firstName = formData.get("first-name");
        const lastName = formData.get("last-name");
        const email = formData.get("email");
        const password = formData.get("password");
        const passwordConfirm = formData.get("password-confirm");

        const user = auth.signup({
          firstName,
          lastName,
          email,
          password,
          passwordConfirm,
        });
        registerForm.reset();
        if (user && auth.isLoggedIn) {
          router.goTo("/account");
        }
      });
    },
    "/account": function () {
      if (!auth.isLoggedIn) {
        router.goTo("/login");
        return;
      }

      // TODO I zaktualizuj tytuł na podstawie salda aktualnego usera
      // zmień w handlePageRequest h1El.innerText na h1El.innerHTML
      handlePageRequest("Your funds: <br> 233$", function () {
        return accountPage(auth.currentUser.transactions)
      });

      // TODO III Zrób obsługę formularza z accountPage
    },
  },
};

export default router;