<script setup>
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();

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

const route = useRoute();

const name = computed(() =>route.name)


</script>

<template>

 <nav  class="navbar navbar-expand-md navbar-light bg-white">
  <div class="container">
    <router-link class="navbar-brand" :to = "{name: 'Index'}">
      <img src="/assets/images/picnobg.png" alt="Logo" height="60">
    </router-link>
    
    <button @click="toggleMenu" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav mx-auto">
        <li @click="closeMenu"  v-for="(nav) in navigations" :key="nav.name" :class="nav-item">
          <router-link v-if="nav.name != 'Projects'" :class="['nav-link scrollto', name == nav.to.name ? 'active' : '']" :to="nav.to">{{nav.name}}
        </router-link>
         <router-link v-else :to="{name: 'Projects', params: {id:1}}" class="nav-link scrollto">Projects
          </router-link>
        </li>
        <!-- <li @click="closeMenu" class="nav-item bg-danger text-white ml-5">
          <router-link :class="['nav-link scrollto text-white']" :to="{name: 'Training'}">Training
        </router-link>
        </li> -->

           
            <!-- <li class="dropdown"><router-link :to="{name: 'Projects'}"><span>Projects</span> <i class="bi bi-chevron-down"></i></router-link>
              <ul>
                <li class="nav-item"><a href="#">Finished Projects</a></li>
                <li class="nav-item"><a href="#">Ongoing Projects</a></li>
              </ul>
            </li> -->
      </ul>
      <div class="d-none d-lg-flex align-center">
      
          <router-link class="blue text-white border-0 rounded p-2 mx-2" :to="{name:'Training'}"> Join Our Training </router-link>
        
          <router-link class="orange text-white border-0 rounded p-2" :to="{name:'Quotation'}"> Get Quote </router-link>    
      
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
.nav-item .active, .nav-link.active{
  color: var(--clr-orange);
}
.nav-link{
  color: var(--primary-blue);
}
.navbar-brand img{
  margin-left: -6em;
}
</style>
