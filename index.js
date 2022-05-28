import auth from "./controllers/auth.js";
import router from "./controllers/router.js";

if (auth.isLoggedIn) {
  router.goTo("/account");
} else {
  router.goTo("/");
}
