<template>
  <div id="app">
    <router-view></router-view>
    <tab-bars></tab-bars>
  </div>
</template>

<script>
import TabBars from './components/TabBars'
// import Vue from 'vue';
// import { Tabbar, TabbarItem } from 'vant';
// Vue.use(Tabbar).use(TabbarItem);
export default {
  components: {
    TabBars
  },
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss">

</style>
