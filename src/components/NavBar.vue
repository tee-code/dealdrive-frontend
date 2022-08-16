<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const socials = computed(() => {
  return store.state.socials;
})

const navigations = [
  {name: 'Home',to: {name: 'Index'}},
  {name: 'About Us',to: {name: 'About'}},
  {name: 'Services',to: {name: 'Services'}},
  {name: 'Blog',to: {name: 'Blog'}},
  {name: 'Contact Us',to: {name: 'About'}},
];


</script>

<template>
 <nav  class="navbar navbar-expand-sm navbar-light bg-white">
  <div class="container">
    <router-link class="navbar-brand" :to = "{name: 'Index'}">
      <img src="/assets/images/picnobg.png" alt="Logo" height="60">
    </router-link>
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav mx-auto">
        <li v-for="nav in navigations" :key="nav.name" :class="nav-item"><router-link class="nav-link scrollto active" :to="nav.to">{{nav.name}}</router-link></li>
           
            <li class="dropdown"><router-link :to="{name: 'Projects'}"><span>Projects</span> <i class="bi bi-chevron-down"></i></router-link>
              <ul>
                <li class="nav-item"><a href="#">Finished Projects</a></li>
                <li class="nav-item"><a href="#">Ongoing Projects</a></li>
              </ul>
            </li>
      </ul>
      <div class="d-flex p-3 align-center">
          <a v-for="social in socials" :key="social.name" :href="social.profile" :class="social.name"><i :class="[social.icon, 'text-primary']"></i></a>
        </div>
    </div>
  </div>
</nav>

</template>

<style scoped>

</style>
