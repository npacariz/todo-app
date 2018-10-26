import axios from "axios";
import { MainURL } from "./URL";
export default class AuthService {
  constructor() {
    axios.defaults.baseURL = MainURL;
    this.setAxiosDefaultAuthorizationHeader();
  }

  login(email, password) {
    return axios.post(`auth/login`, { email, password }).then(response => {
      this.savingToken(response.data);
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

  register(User) {
    return axios.post(`auth/register`, User).then(response => {
      this.savingToken(response.data);
    });
  }
  savingToken(token) {
    localStorage.setItem("token", token.access_token);
    localStorage.setItem("user_id", token.user_id);
    this.setAxiosDefaultAuthorizationHeader();
  }
  isAuthenticated() {
    return !!localStorage.getItem("token");
  }

  gettingUserId() {
    return localStorage.getItem("user_id");
  }
}

export const auth = new AuthService();
