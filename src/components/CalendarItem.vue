<template>
    <div class="box">
      <div class="item__in__box" v-for="n in notifications" :key="n.id">
        <div>
          <div class="name__container">{{ n?.details }}</div>
        </div>
        <div class="content__box">
          <div class="age__container">
            <div class="age__content">{{ calculateAge(n?.birthdayDate) }}</div>
            <img class="age__img" src="@/assets/age.png">
          </div>
          <div class="period__list">
            <!-- eslint-disable-next-line -->
            <div class="period__item" v-for="period in n?.periods" :key="period">{{ period }} {{ (period==1) ? 'день' : ((period%10 < 5) ? 'дня' : 'дней') }}</div>
          </div>
          <div class="change__btn__block">
            <router-link :to="`/notification/change/${n.id}`"><img class="change__img" src="@/assets/change.png"></router-link>
          </div>
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
    calculateAge (date) {
      const year = date.split('-')[0]
      return new Date().getFullYear() - year
    }
  },
  computed: {
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
.period__list{
  display: flex;
  flex-direction: column;
}
.item__in__box{
  /* border:1px solid rgb(168, 87, 87); */
  border-radius: 10px;
  background-color: var(--table-notification-item-bg-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 3px;
}
.period__item{
  color: #c51616;
}
.name__container{
  display: flex;
  align-items: center;
}
.age__container{
  position: relative;
  width: auto;
  display: flex;
  align-items: center;
}
.content__box{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.age__container img {
  max-width: 25px;
  max-height: 25px;
}
.age__content {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  color: #000;
  font-size: 20px;
}
.change__img{
  width: 18px;
}
.change__btn__block{
  display: flex;
  align-items: center;
}
</style>
