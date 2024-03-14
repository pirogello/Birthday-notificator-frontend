<template>
    <div>
        <button v-on:click="sendRequest()">тест api</button>
        <CalendarTable :notifications="notifications"></CalendarTable>
    </div>
</template>

<script>
import { getNotificationById } from '@/api/notificationRepo'
import CalendarTable from '@/components/CalendarTable.vue'
export default {
  name: 'MainView',
  components: {
    CalendarTable
  },
  data () {
    return {
      notifications: [
        {
          id: 1,
          details: 'Some details1',
          birthdayDate: '2024-03-01',
          periods: [1]
        },
        {
          id: 2,
          details: 'Some details2',
          birthdayDate: '2024-03-02',
          periods: [1]
        },
        {
          id: 3,
          details: 'Some details3',
          birthdayDate: '2024-02-03',
          periods: [1]
        },
        {
          id: 4,
          details: 'Some details4',
          birthdayDate: '2024-01-04',
          periods: [1]
        },
        {
          id: 5,
          details: 'Some details5',
          birthdayDate: '2024-03-05',
          periods: [1]
        },
        {
          id: 7,
          details: 'Some details7',
          birthdayDate: '2024-02-07',
          periods: [1]
        },
        {
          id: 12,
          details: 'Some details12',
          birthdayDate: '2024-01-12',
          periods: [1]
        }
      ]
    }
  },
  methods: {
    sendRequest: async function () {
      this.notifications.push(await getNotificationById(1))
    },
    calculatePosition (date) {
      return date.split('-')[3]
    }
  }
}
</script>

<style scoped>
</style>
