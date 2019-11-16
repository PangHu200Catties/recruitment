<template>
  <div id="app">

    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <div v-if="$route.meta.a">
      <foot></foot>
      <router-view v-if="!$route.meta.a"></router-view>
    </div>

  </div>
</template>

<script>
  import foot from '@/components/foot'
export default {
  name: 'App',
  components:{
    foot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
