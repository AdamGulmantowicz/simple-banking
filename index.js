const auth = {
  isLoggedIn: false,
  login(user) {
    const loggedUser = users.find(function (item) {
      return user.email === item.email && user.password === item.password;
    });

    if (loggedUser) {
      this.isLoggedIn = true;
      return loggedUser;
    }

    return null;
  },
  signup(user) {
    const userInDatabase = users.find(function (item) {
      return user.email === item.email;
    });

    if (userInDatabase) {
      return null;
    }

    if (
      user.email &&
      user.password &&
      user.passwordConfirm &&
      user.firstName &&
      user.lastName &&
      user.password === user.passwordConfirm
    ) {
      users.push(user);
      this.isLoggedIn = true;
      return user;
    }

    return null;
  },
  signout() {
    this.isLoggedIn = false;
    router.goTo("home");
  },
};

const router = {
  goTo(pageName) {
    Array.from(document.querySelectorAll("[data-page]")).forEach((el) => {
      const pageData = el.getAttribute("data-page");
      if (pageData !== pageName && pageData !== "") {
        el.classList.add("hide");
      } else {
        if (el.hasAttribute("data-auth")) {
          const visible = Boolean(parseInt(el.getAttribute("data-auth")));
          if (visible === auth.isLoggedIn) {
            el.classList.remove("hide");
          } else {
            el.classList.add("hide");
          }
        } else {
          el.classList.remove("hide");
        }
      }
    });
  },
};

router.goTo("login");

document.querySelector("#sign-out").addEventListener("click", function (e) {
  e.preventDefault();
  auth.signout();
});

Array.from(document.querySelectorAll("[data-goto]")).forEach((el) => {
  el.addEventListener("click", function () {
    router.goTo(el.getAttribute("data-goto"));
  });
});

const users = [
  {
    firstName: "Adam",
    lastName: "Gulmantowicz",
    email: "gulmantowicz.a@gmail.com",
    password: "Test1234",
  },
  {
    firstName: "Tomek",
    lastName: "Feszter",
    email: "test@gmail.com",
    password: "Test1234",
  },
  {
    firstName: "Janusz",
    lastName: "Bielawski",
    email: "janusz@gmail.com",
    password: "Test1234",
  },
];

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
    router.goTo("account");
  }
});

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
    router.goTo("account");
  }
});
