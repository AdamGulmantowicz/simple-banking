import auth from "./controllers/auth.js";
import router from "./controllers/router.js";

router.goTo(window.location.hash.replace("#", ""));

window.addEventListener("hashchange", () => {
  const pageUrl = window.location.hash.replace("#", "");

  router.goTo(pageUrl);
});
