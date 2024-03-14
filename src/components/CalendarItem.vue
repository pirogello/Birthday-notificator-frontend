<template>
    <div class="box">
        <div>{{ notification.details }}</div>
        <div>{{ notification.birthdayDate }}</div>
        <div class="period_list">
            <div v-for="period in notification.periods" :key="period">{{ period }}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CalendarItem',
  components: {
  },
  props: {
    notification: {
      type: Object,
      default: function () {
        return {
          id: '',
          details: '',
          birthdayDate: ''
        }
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  background-color: var(--table-notification-bg-color);
  padding: 10px 5px;
  width: 100%;
  height: 80%;
}
.period_list{
  display: flex;
  flex-direction: row;
}
</style>
