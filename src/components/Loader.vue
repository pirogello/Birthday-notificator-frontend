<template>
    <div class="block_background">
        <div class="loader">Загрузка</div>
    </div>
</template>

<script>
export default {
  name: 'Loader',
  components: {
  },
  data () {
    return {
    }
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
.loader{
  padding: 20px;
  background-color: #dbb7b7;
}
</style>
