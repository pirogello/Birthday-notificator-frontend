import Vue from 'vue'
import { EventBus } from '@/plugins/event-bus'

const host = 'http://localhost:8080'

export function login (username, password) {
  EventBus.$emit('loading', true)
  return Vue.axios.post(host + '/api/v1/auth/login', {
    username: username,
    password: password
  }).then((response) => {
    const token = response.data.jwtToken
    window.localStorage.setItem('jwt', token)
    return response.data
  }).catch((error) => {
    console.log(error)
  }).finally(() => {
    EventBus.$emit('loading', false)
  })
}
