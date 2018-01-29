import axios from 'axios'

export default axios.create({
  baseURL: 'https://kegged-api.herokuapp.com'
})
