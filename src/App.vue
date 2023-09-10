<template>
  <div class="bg-gray-700 min-h-screen text-white">
      <HeaderNav />
      <SideBar />
      <router-view />
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue';
import SideBar from './components/SideBar.vue';

export default {
    components: {
      HeaderNav,
      SideBar
    }
}
</script>

<style>

</style>
