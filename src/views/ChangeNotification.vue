<template>
    <div class="block_background">
        <div class="modal">
            <router-link :to="`/`">X</router-link>
            <div>notification with id: {{ notification.id }}</div>
            <div class="form_row">
                <label for="details">Имя </label>
                <input v-model="notification.details" id="details"/>
            </div>
           <div class="form_row">
                <label for="birthdayDate">Дата рождения </label>
                <input v-model="notification.birthdayDate" type="date" id="birthdayDate"/>
           </div>
           <div class="form_row">
                <div class="period_list">
                    <div>Напомнить </div>
                    <div>
                        <label for="1">за 1 день до ДР </label>
                        <input type="checkbox" id="1" value="1" v-model="notification.periods">
                    </div>
                   <div>
                        <label for="3">за 3 день до ДР </label>
                        <input type="checkbox" id="3" value="3" v-model="notification.periods">
                   </div>
                    <div>
                        <label for="7">за 7 день до ДР </label>
                        <input type="checkbox" id="7" value="7" v-model="notification.periods">
                    </div>
                </div>
           </div>
        </div>
    </div>
</template>

<script>
import { getNotificationById } from '@/api/notificationRepo'
export default {
  name: 'ChangeNotification',
  components: {
  },
  data () {
    return {
      notification: {},
      periodsOfNotification: []
    }
  },
  async created () {
    this.notification = await getNotificationById(this.$route.params.id)
  },
  methods: {
  }
}
</script>

<style scoped>
.block_background{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.39);
  z-index: 9999;
}
.modal{
  background-color: rgb(95, 192, 209);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px 100px;
  z-index: 9999;
}
.form_row{
  padding-top: 10px;
}
</style>
