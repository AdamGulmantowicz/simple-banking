export default function registerPage() {
  return /* html */ `
    <div>
      <form id="signupForm">
        <input name="first-name" required class="input is-primary" type="text" placeholder="First name">
        <input name="last-name" required class="input is-primary" type="text" placeholder="Last name">
        <input name="email" required class="input is-primary" type="email" placeholder="Email address">
        <input name="password" required class="input is-primary" type="password" placeholder="Password">
        <input name="password-confirm" required class="input is-primary" type="password"
          placeholder="Password confirm">

        <button type="submit" class="button is-primary">Register</button>
      </form>
    </div>`;
}
