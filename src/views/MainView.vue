<template>
    <div>
        <CalendarTable></CalendarTable>
        <router-view/>
    </div>
</template>

<script>
import CalendarTable from '@/components/CalendarTable.vue'
export default {
  name: 'MainView',
  components: {
    CalendarTable
  },
  data () {
    return {}
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
