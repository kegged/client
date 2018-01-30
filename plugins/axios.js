// import axios
import axios from 'axios'

// base url is base link of our api
export default axios.create({
  baseURL: 'https://kegged-api.herokuapp.com'
})
