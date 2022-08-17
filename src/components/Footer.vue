<script setup>
import { ref } from 'vue'
import { SocialChat } from 'vue-social-chat'
import ChatUs from './ChatUs.vue';

</script>

<template>
     <!-- ======= Footer ======= -->
    <footer id="footer" class="footer">
      <ChatUs />
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
    
</template>

<style scoped>

</style>
