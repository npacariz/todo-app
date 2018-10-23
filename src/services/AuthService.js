import axios from "axios";

export default class AuthService {
  constructor() {
    axios.defaults.baseURL = "http://laravelapp.loc/api/";
    this.setAxiosDefaultAuthorizationHeader();
  }

  login(email, password) {
    return axios.post(`auth/login`, { email, password }).then(response => {
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("user_id", response.data.user_id);
      this.setAxiosDefaultAuthorizationHeader();
    });
  }

  setAxiosDefaultAuthorizationHeader() {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  create() {
    return axios.get("auth/create");
  }

  logout() {
    axios.post(`auth/logout`);
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    delete axios.defaults.headers.common["Authorization"];
  }

  register(newUser) {
    return axios.post(`auth/register`, newUser).then(response => {
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("user_id", response.data.user_id);
      this.setAxiosDefaultAuthorizationHeader();
    });
  }

  isAuthenticated() {
    return !!localStorage.getItem("token");
  }

  gettingUserId() {
    return localStorage.getItem("user_id");
  }
}

export const auth = new AuthService();
