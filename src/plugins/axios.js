import axios from 'axios'

axios.interceptors.request.use(
  (request) => {
    return request
  }
)

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axios
