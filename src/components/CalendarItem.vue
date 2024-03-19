<template>
    <div class="box">
      <div class="item_in_box" v-for="n in notifications" :key="n.id">
        <router-link :to="`/notification/change/${n.id}`">Изменить</router-link>
        <div>{{ n?.details }}</div>
        <div>{{ n?.birthdayDate }}</div>
        <div class="period_list">
            <div v-for="period in n?.periods" :key="period">{{ period }}, </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CalendarItem',
  components: {
  },
  props: {
    notifications: {
      type: Array,
      default: () => []
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
  overflow: auto;
}
.period_list{
  display: flex;
  flex-direction: row;
}
.item_in_box{
  border:1px solid rgb(168, 87, 87);
}
</style>
