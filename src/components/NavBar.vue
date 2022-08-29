<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();

const route = useRoute();

const socials = computed(() => {
  return store.state.socials;
});

function toggleMenu() {
    let collapsNav=document.querySelector('.navbar-collapse')
    collapsNav.classList.contains('close')?
                          collapsNav.classList.remove('close'):''
                           
}
function closeMenu() {
  let collapsNav=document.querySelector('.collapse')
  collapsNav.classList.contains('close')?
                          collapsNav.classList.remove('close'):
                          collapsNav.classList.add('close')
}

const navigations = computed(() => {
  return store.state.navigations;
});


</script>

<template>
 <nav  class="navbar navbar-expand-sm navbar-light bg-white">
  <div class="container">
    <router-link class="navbar-brand" :to = "{name: 'Index'}">
      <img src="/assets/images/picnobg.png" alt="Logo" height="60">
    </router-link>
   
    <button @click="toggleMenu" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav mx-auto">
        <li @click="closeMenu"  v-for="nav in navigations" :key="nav.name" :class="nav-item">
          <router-link v-if="nav.name != 'Projects'" class="nav-link scrollto active" :to="nav.to">{{nav.name}}
        </router-link>
        
        </li>
        <li @click="closeMenu" class="nav-item" :key="2">
          <router-link :to="{name: 'Projects', params: {id:1}}" class="nav-link scrollto active">Projects
          </router-link>
         
        </li>
           
            <!-- <li class="dropdown"><router-link :to="{name: 'Projects'}"><span>Projects</span> <i class="bi bi-chevron-down"></i></router-link>
              <ul>
                <li class="nav-item"><a href="#">Finished Projects</a></li>
                <li class="nav-item"><a href="#">Ongoing Projects</a></li>
              </ul>
            </li> -->
      </ul>
      <div class="d-flex p-3 align-center">
          <a target="_blank" v-for="social in socials" :key="social.name" :href="social.profile" :class="social.name"><i :class="[social.icon, 'text-primary']"></i></a>
        </div>
    </div>
  </div>
</nav>

</template>

<style scoped>

.container{
  position: relative;
}
.navbar-toggler{
  position: absolute;
  top: 25px;
  right: .9em;
}
.collapse.close{
  display: none;
}
.navbar-brand img{
  margin-left: -6em;
}
</style>
