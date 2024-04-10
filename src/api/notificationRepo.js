import Vue from 'vue'
import { EventBus } from '@/plugins/event-bus'

const host = 'http://localhost:8080'

export function getNotificationById (id) {
  EventBus.$emit('loading', true)
  return Vue.axios.get(host + `/api/v1/notification/${id}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => console.log(error))
    .finally(() => {
      EventBus.$emit('loading', false)
    })
}

export function getAllNotificationBetween (from, to) {
  EventBus.$emit('loading', true)
  return Vue.axios.get(host + `/api/v1/notification?from=${from}&to=${to}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => console.log(error))
    .finally(() => {
      EventBus.$emit('loading', false)
    })
}

export function getAllAvailablePeriods () {
  EventBus.$emit('loading', true)
  return Vue.axios.get(host + '/api/v1/notification/periods')
    .then((response) => {
      return response.data
    })
    .catch((error) => console.log(error))
    .finally(() => {
      EventBus.$emit('loading', false)
    })
}

export function changeNotification (notification) {
  EventBus.$emit('loading', true)
  return Vue.axios.put(host + '/api/v1/notification', notification)
    .then((response) => {
      return response.data
    })
    .catch((error) => console.log(error))
    .finally(() => {
      EventBus.$emit('loading', false)
    })
}
