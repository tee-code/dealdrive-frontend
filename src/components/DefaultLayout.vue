<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})


</script>

<template>
 <!-- ======= Top Bar ======= -->
    <section id="topbar" class="d-flex align-items-center">
      <div class="container d-flex justify-content-center">
        <div class="contact-info d-flex align-items-center">
          <i class="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@dealdrivetechnology.com">contact@dealdrivetechnology.com</a></i>
          <i class="bi bi-phone d-flex align-items-center ms-4"><span>+234 806 1467 293</span></i>
        </div>
      </div>
    </section><!-- End Top Bar-->

    <!-- ======= Header ======= -->
    <header id="header" class="header d-flex align-items-center">
      <div class="container d-flex justify-content-between">
  
        <div id="logo">
          <!-- <h1><a href="index.html">Reve<span>al</span></a></h1> -->
          <!-- Uncomment below if you prefer to use an image logo -->
          <a href="index.html"><img src="assets/images/picnobg.png" alt=""></a>
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

    <router-view></router-view>

     <!-- ======= Footer ======= -->
    <footer id="footer" class="footer">

      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-5 col-md-12 footer-info">
            <router-link :to="{name: 'Index'}" class="logo d-flex align-items-center">
              <span>Dealdrive</span>
            </router-link>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
            <div class="social-links d-flex mt-4">
              <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
              <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
              <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
              <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div class="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </div>

          <div class="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#">Brand Design</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile App Aevelopment</a></li>
              <li><a href="#">Software Development</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              81 Itu road, Uyo, Akwa Ibom, 
              Nigeria<br>
              <strong>Phone:</strong> +234 806 1467 293<br>
              <strong>Email:</strong> contact@dealdrivetechnology.com<br>
            </p>

          </div>
        </div>
      </div>

      <div class="container mt-4">
        <div class="copyright">
          &copy; Copyright <strong><span>dealdrive</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
          Designed by <a href="#">dealdrive Technology</a>
        </div>
      </div>

    </footer><!-- End Footer -->
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  
</template>

<style scoped>

</style>
