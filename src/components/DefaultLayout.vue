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

    <div class="head-wrapper">
      <TopBar />
      <NavBar />
    </div>
    <router-view></router-view>
    <Footer />
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

</template>

<style scoped>
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
