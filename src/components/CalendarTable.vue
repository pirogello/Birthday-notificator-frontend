<template>
    <div>
        <div class="calendar_header">
            <div class="calendar_header_text">{{currentMonthText}}</div>
            <div class="calendar_header_btns">
                <button v-on:click="changeMonth(-1)">&lt;</button>
                <button v-on:click="changeMonth(+1)">&gt;</button>
            </div>
        </div>
        <table>
            <thead>
                <tr class="table_header">
                    <th v-for="day in dayOfWeek" :key="day">{{ day }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="i in 5" :key="i">
                    <td v-for="j in dayOfWeek.length" :key="`${i}-${j}`">
                        <div class="num_of_day">{{ getNumOfDayInTable(i, j) }}</div>
                        <CalendarItem :notifications="getNotificationsForDay(getNumOfDayInTable(i, j))"/>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { getAllNotificationBetween } from '@/api/notificationRepo'
import CalendarItem from '@/components/CalendarItem.vue'
export default {
  name: 'MainView',
  components: {
    CalendarItem
  },
  data () {
    return {
      notifications: [],
      dayOfWeek: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      month: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      curMonthNum: new Date().getMonth()
    }
  },
  async created () {
    const year = new Date().getFullYear()
    const month = (this.curMonthNum + 1 < 10 ? ('0' + (this.curMonthNum + 1)) : (this.curMonthNum + 1))
    const daysInMonth = new Date(year, month, 0).getDate()
    this.notifications = await getAllNotificationBetween(`${year}-${month}-01`, `${year}-${month}-${daysInMonth}`)
  },
  methods: {
    getNumOfDayInTable: function (i, j) {
      const year = new Date().getFullYear()
      const month = this.curMonthNum + 1
      const numOfweek = new Date(year + '-' + month + '-01').getDay()
      if (i === 1 && j < numOfweek) return ''
      const dayOfMonth = ((i - 1) * 7) + j - (numOfweek - 1)
      return dayOfMonth > new Date(year, month, 0).getDate() ? '' : dayOfMonth
    },
    changeMonth: async function (num) {
      this.curMonthNum += num
      if (this.curMonthNum < 0) {
        this.curMonthNum += 12
      } else if (this.curMonthNum > 11) {
        this.curMonthNum -= 12
      }
      const year = new Date().getFullYear()
      const month = (this.curMonthNum + 1 < 10 ? ('0' + (this.curMonthNum + 1)) : (this.curMonthNum + 1))
      const daysInMonth = new Date(year, month, 0).getDate()
      this.notifications = await getAllNotificationBetween(`${year}-${month}-01`, `${year}-${month}-${daysInMonth}`)
    }
  },
  computed: {
    currentMonthText: function () {
      return this.month[this.curMonthNum]
    },
    getNotificationsForDay () {
      return (day) => {
        if (!day) return null
        const dayFormatted = day < 10 ? `0${day}` : day.toString()
        const monthFormatted = this.curMonthNum + 1 < 10 ? `0${this.curMonthNum + 1}` : (this.curMonthNum + 1).toString()
        return this.notifications.filter((notification) => {
          const [, month, day] = notification.birthdayDate.split('-')
          return day === dayFormatted && month === monthFormatted
        })
      }
    }
  }
}
</script>

<style scoped>
.num_of_day{
  background-color: var(--table-num-bg-color);
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

td{
  min-width: 250px;
  height: 140px;
  border-radius: 15px;
  overflow: hidden;
}
th{
  border-radius: 15px;
  min-height: 150px;
  height: 40px;
}
.table_header{
  background-color: var(--main-bg-color);
}

table{
  margin: auto;
}

button{
    width: 50px;
    height: 30px;
}
.calendar_header_text{
  font-size:25px;
  text-align: center;
}
.calendar_header_btns{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
