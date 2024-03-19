<template>
  <div id="app">
    <div class="wrapper">
      <Loader v-if="isLoading"/>
      <h1 class="title">Birthday notificator</h1>
      <router-view/>
    </div>
  </div>
</template>

<script>

import favicon from '@/assets/favicon.ico'
import Loader from '@/components/Loader.vue'
import { EventBus } from '@/plugins/event-bus.js'
export default {
  components: {
    Loader
  },
  data () {
    return {
      isLoading: false
    }
  },
  created () {
    EventBus.$on('loading', (isLoading) => {
      this.isLoading = isLoading
    })
  },
  metaInfo: {
    title: 'Birthday notificator',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: favicon }
    ]
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
