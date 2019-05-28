<template>
  <div class="home-container">
    <Sidebar></Sidebar>
    <Header></Header>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/layout/Sidebar.vue'
import Header from '@/components/layout/Header.vue'
export default {
  name: 'home',
  components: {
    Sidebar,
    Header
  }
}
</script>
