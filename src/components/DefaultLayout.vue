<script setup>
import { ref } from 'vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import TopBar from './TopBar.vue'

defineProps({
  msg: String
});


</script>

<template>

    <div class="head-wrapper">
      <TopBar />
      <Header />
    </div>
 <!-- ======= Top Bar ======= -->
  <div class="head-wrapper">

    <section id="topbar" class="d-flex align-items-center">
      <div class="container d-flex justify-content-center">
        <div class="contact-info ">
          <i class="bi bi-envelope"><a href="mailto:contact@dealdrivetechnology.com">contact@dealdrivetechnology.com</a></i>
          <i class="bi bi-phone"><span>+234 806 1467 293</span></i>
        </div>
      </div>
    </section><!-- End Top Bar-->

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

    </div><!-- End of head-wrapper -->

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
