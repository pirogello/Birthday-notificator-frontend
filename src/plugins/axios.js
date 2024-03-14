import axios from 'axios'

axios.interceptors.request.use(
  (request) => {
    console.log('request')
    return request
  }
)

axios.interceptors.response.use(
  (response) => {
    console.log('response')
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axios
