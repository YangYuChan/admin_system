<template>
  <div class="home-container">
    <Sidebar></Sidebar>
    <div class="main-container" :class="[ isCollapse ? 'hide-sidebar' : '' ]">
      <Header></Header>
      <div class="content-container">
         <router-view/>
      </div>
     
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/layout/Sidebar.vue'
import Header from '@/components/layout/Header.vue'
import { mapState,mapMutations } from 'vuex'
export default {
  name: 'home',
  components: {
    Sidebar,
    Header
  },
  computed:{
        ...mapState('app',['isCollapse'])
  },
  methods:{
    ...mapMutations('app',['SET_COLLAPSE']),
        Collapse(){
            this.SET_COLLAPSE()
        },
  }
}
</script>
