import users from "../data/users.js";

const auth = {
  isLoggedIn: false,
  currentUser: null,
  login(user) {
    const loggedUser = users.find(function (item) {
      return user.email === item.email && user.password === item.password;
    });

    if (loggedUser) {
      this.isLoggedIn = true;
      this.currentUser = loggedUser;
      window.localStorage.setItem("currentUser", loggedUser.email);
      window.localStorage.setItem("password", loggedUser.password);
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
      this.currentUser = loggedUser;
      window.localStorage.setItem("currentUser", loggedUser.email);
      window.localStorage.setItem("password", loggedUser.password);
      return user;
    }

    return null;
  },
  signout() {
    this.isLoggedIn = false;
    this.currentUser = null;
    window.localStorage.removeItem("currentUser");
    window.localStorage.removeItem("password");
    router.goTo("/");
  },
};

export default auth;
