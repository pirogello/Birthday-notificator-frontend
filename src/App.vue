<template>
  <div id="app">
    <div class="wrapper">
      <Header></Header>
      <Loader v-if="isLoading"/>
      <router-view/>
    </div>
  </div>
</template>

<script>

import favicon from '@/assets/favicon.ico'
import Loader from '@/components/Loader.vue'
import Header from '@/components/Header.vue'
import { EventBus } from '@/plugins/event-bus.js'
export default {
  components: {
    Loader, Header
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
