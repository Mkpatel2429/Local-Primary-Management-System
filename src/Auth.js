class Auth {
  constructor() {
      this.authenticated = true;
  }

  login() {
      this.authenticated = true;
  }

  logout() {
      this.authenticated = false;
  }

  isAuthenticated() {
      return this.authenticated;
  }
}

export default new Auth();