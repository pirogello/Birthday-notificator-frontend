import axios from 'axios'
import router from '../router'
axios.interceptors.request.use(
  (request) => {
    const token = window.localStorage.getItem('jwt')
    if (token) {
      request.headers.Authorization = `Bearer ${token}`
    }
    return request
  }
)

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      window.localStorage.removeItem('jwt')
      router.push({ path: '/login' })
    }
    return Promise.reject(error)
  }
)

export default axios
