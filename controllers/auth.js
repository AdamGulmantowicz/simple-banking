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
      return user;
    }

    return null;
  },
  signout() {
    this.isLoggedIn = false;
    this.currentUser = null;
    router.goTo("/");
  },
};

export default auth;
