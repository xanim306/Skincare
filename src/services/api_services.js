import axios from "axios";
const BASE_URL = "http://127.0.0.1:8000";

export class Apiservice {
  static async register(response) {
    return axios.post(`${BASE_URL}/accounts/register/`, response);
  }

  static async login(response) {
    axios.post(`${BASE_URL}/accounts/login/`, response);
    // data.then((res) => {
    //   localStorage.setItem("token", res.tokens.access);
    //   localStorage.setItem("refresh", res.tokens.refresh);
    // });
  }
  static async activate(uid, response) {
    let data = axios.post(`${BASE_URL}/accounts/activate/${uid}`, response);
    console.log(data);
  }

  static logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
  }
}
