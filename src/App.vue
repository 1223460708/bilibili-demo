<template>
  <div id="app">
    <router-view />
    <tab-bars></tab-bars>
  </div>
</template>

<script>
import TabBars from './components/TabBars'

export default {
  components: {
    TabBars
  },
}
</script>

<style lang="scss">

</style>
