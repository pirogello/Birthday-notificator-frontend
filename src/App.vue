<template>
  <div id="app">
    <div class="wrapper">
      <h1 class="title">Birthday notificator</h1>
      <router-view/>
    </div>
  </div>
</template>

<script>

import favicon from '@/assets/favicon.ico'

export default {
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
