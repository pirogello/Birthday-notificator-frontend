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
                    <div v-for="np in periodsOfNotification" :key="np">
                      <label :for="np">за {{np}} день до ДР </label>
                      <input type="checkbox" :id="np" :value="np" v-model="notification.periods">
                    </div>
                </div>
           </div>
           <button v-on:click="changeNotification">Изменить</button>
        </div>
    </div>
</template>

<script>
import { changeNotification, getNotificationById, getAllAvailablePeriods } from '@/api/notificationRepo'
import { EventBus } from '@/plugins/event-bus'
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
    this.periodsOfNotification = (await getAllAvailablePeriods()).periods
  },
  methods: {
    changeNotification: async function () {
      const updatedNotification = await changeNotification({
        id: this.notification.id,
        details: this.notification.details,
        birthdayDate: this.notification.birthdayDate,
        periods: this.notification.periods
      })
      EventBus.$emit('updateNotification', updatedNotification)
      this.$router.push({ path: '/' })
    }
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
  z-index: 1000;
}
.modal{
  background-color: rgb(95, 192, 209);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px 100px;
  z-index: 1000;
}
.form_row{
  padding-top: 10px;
}
</style>
