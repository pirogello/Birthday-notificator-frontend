<template>
    <div>
        <div class="calendar_header">
            <div class="calendar_header_text">{{currentMonthText}}   {{curYearNum}}</div>
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
                    <td v-for="j in dayOfWeek.length" :key="j">
                        <div class="num_of_day">{{ getNumOfDayInTable(i, j) }}</div>
                        <CalendarItem :notification="getNotificationForTable(getNumOfDayInTable(i, j))"/>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import CalendarItem from '@/components/CalendarItem.vue'
export default {
  name: 'MainView',
  props: {
    notifications: {
      type: Array,
      default: () => []
    }
  },
  components: {
    CalendarItem
  },
  data () {
    return {
      dayOfWeek: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      month: ['Январь', 'Фервраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      curMonthNum: new Date().getMonth(),
      curYearNum: new Date().getFullYear()
    }
  },
  methods: {
    getNumOfDayInTable: function (i, j) {
      const year = this.curYearNum
      const month = this.curMonthNum + 1
      const day = new Date(year + '-' + month + '-01').getDay()
      if (i === 1 && j < day) return ''
      const dayOfMonth = ((i - 1) * 7) + j - (day - 1)
      return dayOfMonth > new Date(year, month, 0).getDate() ? '' : dayOfMonth
    },
    getNotificationForTable: function (day) {
      const res = this.notifications.find(el => {
        const spitedDate = el.birthdayDate.split('-')
        return spitedDate[2] === (day < 10 ? ('0' + day) : day) &&
               spitedDate[1] === (this.curMonthNum + 1 < 10 ? ('0' + (this.curMonthNum + 1)) : (this.curMonthNum + 1)) &&
               spitedDate[0] === this.curYearNum + ''
      })
      return res
    },
    changeMonth: function (num) {
      this.curMonthNum += num
      if (this.curMonthNum < 0) {
        this.curMonthNum += 12
        this.curYearNum--
      } else if (this.curMonthNum > 11) {
        this.curMonthNum -= 12
        this.curYearNum++
      }
    }
  },
  computed: {
    currentMonthText: function () {
      return this.month[this.curMonthNum]
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
