<script setup>
import { computed, ref } from 'vue'
import { SocialChat } from 'vue-social-chat'
import { useStore } from 'vuex';
import ChatUs from './ChatUs.vue';



const store = useStore();

const socials = computed(() => {
  return store.state.socials;
});

const services = computed(() => {
  return store.state.services;
});

const navigations = computed(() => {
  return store.state.navigations;
}); 

const contact = computed(() => {
  return store.state.contactus;
});
</script>

<template>
     <!-- ======= Footer ======= -->
    <footer id="footer" class="footer">
      <!-- <ChatUs /> -->
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-5 col-md-12 footer-info">
            <router-link :to="{name: 'Index'}" class="logo d-flex align-items-center">
              <span>Dealdrive</span>
            </router-link>
            <p>We believe there is a software solution to every hard craked experience in a brand. What we do is to ease the experience.</p>
            <div class="social-links d-flex mt-4">
              <a target="_blank" v-for="social in socials" :key="social" :href="social.profile" :class="social.name"><i :class="social.icon"></i></a>
              
            </div>
          </div>

          <div class="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li @click="closeMenu"  v-for="nav in navigations" :key="nav.name" :class="nav-item">
              <router-link v-if="nav.name != 'Projects'" class="nav-link scrollto active" :to="nav.to">{{nav.name}}</router-link></li>
            </ul>
          </div>

          <div class="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li v-for="service in services" :key="service"><router-link :to="{name: 'Services'}">{{service.title}}</router-link></li>
              
            </ul>
          </div>

          <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              {{ contact.address }}
              <br>
              <strong>Phone:</strong> {{contact.phone1}}<br>
              <strong>Email:</strong> {{contact.email1}}<br>
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
