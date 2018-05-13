import axios from 'axios'

export default class Contacts {
  constructor () {
    axios.defaults.baseURL = 'http://localhost:3000/api/'
  }

  getAll () {
    return axios.get('contacts')
  }
}

export const contacts = new Contacts()
