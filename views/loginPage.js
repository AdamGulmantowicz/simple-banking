export default function loginPage() {
  return /* html */ `
  <div>
    <form id="loginForm">
      <input name="email" required class="input is-primary" type="email" placeholder="Email address">
      <input name="password" required class="input is-primary" type="password" placeholder="Password">

      <button type="submit" class="button is-primary">Login</button>
    </form>
  </div>`;
}
