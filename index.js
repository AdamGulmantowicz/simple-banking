import auth from "./controllers/auth.js";
import router from "./controllers/router.js";

const userEmail = window.localStorage.getItem("currentUser");
const userPassword = window.localStorage.getItem("password");

auth.login({ email: userEmail, password: userPassword });

if (auth.isLoggedIn) {
  router.goTo("/account");
} else {
  router.goTo("/");
}
