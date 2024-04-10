<template>
    <div class="header">
        <div class="title">Birthday notificator</div>
        <router-link :to="`/login`" v-if="hasAuth">login</router-link>
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
  },
  computed: {
    hasAuth () {
      console.log(window.localStorage.getItem('jwt'))
      return window.localStorage.getItem('jwt') == null
    }
  }
}
</script>

<style scoped>
.header{
  padding: 0;
  margin: 10px;
  display: flex;
  flex-direction: row;
}
</style>
