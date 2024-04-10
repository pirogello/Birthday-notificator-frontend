<template>
    <div class="loginForm">
      <div class="field">
        <label class="field__label" for="login"> Логин: </label>
        <input id="login" v-model="username">
      </div>
      <div class="field">
        <label class="field__label" for="password"> Пароль: </label>
        <input id="password" v-model="password">
      </div>
      <div class="button">
        <button v-on:click="onlogin">Войти</button>
      </div>
    </div>
</template>

<script>
import { login } from '@/api/authRepo'
import router from '../router'
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
      username: '',
      password: ''
    }
  },
  methods: {
    async onlogin () {
      await login(this.username, this.password)
      router.go(-1)
    }
  },
  computed: {
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
