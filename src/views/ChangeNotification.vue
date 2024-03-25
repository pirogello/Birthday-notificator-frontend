<template>
  <div class="block_background">
    <div class="modal">
      <div class="header">
        <div>{{ formHeader }}</div>
        <router-link :to="`/`">X</router-link>
      </div>
      <div class="form__row">
          <label class="field__label" for="details">Имя </label>
          <input class="field__input" v-model="notification.details" id="details"/>
      </div>
      <div class="form__row">
          <label class="field__label" for="birthdayDate">Дата рождения </label>
          <input class="field__input" v-model="notification.birthdayDate" type="date" id="birthdayDate"/>
      </div>
      <div class="form__row">
        <div>Напомнить за </div>
        <div class="period__list">
          <div class="form__checkbox__row" v-for="np in periodsOfNotification" :key="np">
            <input class="field__input__checkbox" type="checkbox" :id="np" :value="np" v-model="notification.periods">
            <!-- eslint-disable-next-line -->
            <label class="field__label" :for="np"> {{np}} {{ (np==1) ? 'день' : ((np%10 < 5) ? 'дня' : 'дней') }}</label>
          </div>
        </div>
      </div>
      <div class="form__row">
        <button class="submit__button" v-on:click="changeNotification">Изменить</button>
      </div>
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
      periodsOfNotification: [],
      formHeader: 'Изменение напоминания '
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
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
.modal{
  background-color: #5fc0d1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px 15px;
  z-index: 1000;
  width: 400px;
  height: 320px;
  border-radius: 10px;
}
.form__row{
  padding-top: 10px;
  display: flex;
  flex-direction: column;
}

.header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
}

.field__label {
  display: block;
  margin-bottom: 0.25rem;
}
.field__input {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #9de8f5;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.form__checkbox__row{
  display: flex;
  flex-direction: row;
}
.field__input:focus {
  color: #212529;
  background-color: #b6edf7;
  border-color: #bdbdbd;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.3);
}
.field__input__checkbox{
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.field__input__checkbox+label{
  display: inline-flex;
  align-items: center;
  user-select: none;
}
.field__input__checkbox+label::before{
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #165ba0;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-color: #9de8f5;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
.field__input__checkbox:checked+label::before {
  border-color: #0b76ef;
  background-color: #0b76ef;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

.period__list {
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.submit__button {
  display: inline-block;
  box-sizing: border-box;
  padding: 0 25px;
  margin: 0 15px 15px 0;
  outline: none;
  border: 1px solid #42d3ec;
  border-radius: 10px;
  height: 46px;
  line-height: 46px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: #444;
  background-color: #9de8f5;
  box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
  cursor: pointer;
  user-select: none;
  align-self: center;
  appearance: none;
  touch-action: manipulation;
  vertical-align: top;
  transition: box-shadow 0.2s;
}
.submit__button:focus-visible {
  border: 1px solid #4c51f9;
  outline: none;
}
.submit__button:hover {
  transition: all 0.2s;
  box-shadow: 0 7px 14px rgb(65 132 144 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
}
.submit__button:active {
  background-color: #19adc7;
}
.submit__button:disabled {
  background-color: #eee;
  border-color: #eee;
  color: #444;
  cursor: not-allowed;
}
</style>
