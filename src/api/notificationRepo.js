import Vue from 'vue'

const host = 'http://localhost:8080'

export function getNotificationById (id) {
  return Vue.axios.get(host + `/api/v1/notification/${id}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => console.log(error))
    .finally(() => console.log('succes'))
}
