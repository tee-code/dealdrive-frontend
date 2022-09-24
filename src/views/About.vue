<script setup>
import { ref } from 'vue';
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Team from '../components/Team.vue';

defineProps({
  msg: String
})


</script>

<template>
  <main id="main">
     <!-- ======= Breadcrumbs ======= -->
     <div class="breadcrumbs">
      <div class="page-header d-flex align-items-center" style="">
        <div class="container position-relative">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-6 text-center">
              <h2>About what we do</h2>
              <p> We believe there is a software solution to every hard craked experience in a brand. What we do is to ease the experience</p>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div class="container">
          <ol>
            <li><router-link :to="{name: 'Index'}">Home</router-link></li>
            <li>About</li>
          </ol>
        </div>
      </nav>
    </div><!-- End Breadcrumbs -->

    <About />

    <!-- ======= Team Section ======= -->

    <team />

    <Contact />
    </main><!-- End #main -->


</template>

<style scoped>

</style>
