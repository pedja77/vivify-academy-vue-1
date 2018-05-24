import axios from "axios"

export default class AuthService {
  login(email, password) {
    return axios
      .post("http://localhost:8000/api/login", {
        email,
        password
      })
      .then(({ data }) => {
        console.log(data.token)
        window.localStorage.setItem("loginToken", data.token)

        const TOKEN = `Bearer ${data.token}`
        axios.defaults.headers.common["Authorization"] = TOKEN
      })
  }

  isAuthenticated() {
    return !!window.localStorage.getItem("loginToken")
  }

  logout() {
    window.localStorage.removeItem("loginToken")
    delete axios.defaults.headers.common["Authorization"]
  }
}

export const authService = new AuthService()
