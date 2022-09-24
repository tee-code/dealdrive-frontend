<script setup>
import { ref } from 'vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import TopBar from './TopBar.vue'
import NavBar from './NavBar.vue'


defineProps({
  msg: String
});


</script>

<template>
  <div class="position-relative">
    <div class="head-wrapper">
      <TopBar />
      <NavBar />
    </div>
    <router-view></router-view>
    <Footer />
    <div class="fs-5 fw-bold d-lg-none fixed-bottom p-2 w-100 d-flex justify-content-center align-items-center bg-white shadow-lg">
      
      <router-link class="border-0 rounded p-2" :to="{name:'Quotation'}"> Get Quote </router-link>    
      
      <router-link style="color: var(--primary-blue);" class="border-0 rounded p-2 mx-2" :to="{name:'Training'}">Training </router-link>
    
    </div>
  </div>
    
</template>

<style scoped>
.left{
  position:absolute;
  left: -5%;
}
.right{
  position: absolute;
  right: -3%;
}
.rotate{
  transform: rotate(-90deg);
}
.head-wrapper{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.contact-info{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.7rem;
  padding: 1em;
}

@media screen and (min-width:60rem) {
  .contact-info{
    flex-direction: row;
  }
  .contact-info i{
    margin: 0 2em;
  }
}
</style>
