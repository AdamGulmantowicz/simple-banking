import auth from "../controllers/auth.js";

export default function homePage() {
  return /* html */ `
    <div id="home">
      To jest strona główna<br>

      ${auth.isLoggedIn ? /* html */ `<a href="#/account">Twoje konto</a>` : ""}
    </div>`;
}
