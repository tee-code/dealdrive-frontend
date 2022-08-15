<script setup>
import { ref } from 'vue'


</script>

<template>
  <!-- ======= Header ======= -->
    <header id="header" class="header d-flex align-items-center">
      <div class="container d-flex justify-content-between">
  
        <div id="logo">
          <!-- <h1><a href="index.html">Reve<span>al</span></a></h1> -->
          <!-- Uncomment below if you prefer to use an image logo -->
          <router-link :to = "{name: 'Index'}"><img src="/assets/images/picnobg.png" alt=""></router-link>
        </div>
  
        <nav id="navbar" class="navbar">
          <ul>
            <li><router-link class="nav-link scrollto active" :to="{name: 'Index'}">Home</router-link></li>
            <li><router-link class="nav-link scrollto" :to="{name: 'About'}">About</router-link></li>
            <li><router-link class="nav-link scrollto " :to="{name: 'Services'}">Services</router-link></li>
            <li><router-link class="nav-link scrollto " :to="{name: 'Blog'}">Blog</router-link></li>
            <li class="dropdown"><router-link :to="{name: 'Projects'}"><span>Projects</span> <i class="bi bi-chevron-down"></i></router-link>
              <ul>
                <li><a href="#">Finished Projects</a></li>
                <li><a href="#">Ongoing Projects</a></li>
              </ul>
            </li>
            <li><router-link class="nav-link scrollto" :to="{name: 'About'}">Contact</router-link></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav><!-- .navbar -->
        <div class="social-links d-md-flex align-items-center" id="social">
          <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" class="facebook"><i class="fab fa-facebook"></i></a>
          <a href="#" class="instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" class="linkedin"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
    </header><!-- End Header -->

</template>

<style scoped>

</style>
