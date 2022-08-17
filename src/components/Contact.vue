<template>
   <!-- ======= Contact Section ======= -->
     <section id="contact" class="h-contact">
      <div class="container" data-aos="fade-up">

    <div class=" section-header">
        <span>Contact</span>
        <h2>Contact Us</h2>
      </div>

      <div class="row">

        <div class="col-lg-6">

          <div class="row">
            <div class="col-md-12">
              <div class="info-box">
                <i class="bx bx-map"></i>
                <h3>Our Address</h3>
                <p>{{ contact.address }}</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="info-box mt-4">
                <i class="bx bx-envelope"></i>
                <h3>Email Us</h3>
                <p>{{contact.email1}}<br>{{ contact.email2 }}</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="info-box mt-4">
                <i class="bx bx-phone-call"></i>
                <h3>Call Us</h3>
                <p>{{contact.phone1}}<br>{{contact.phone2}}</p>
              </div>
            </div>
          </div>

        </div>

        <div class="col-lg-6 mt-4 mt-lg-0">
          <form ref="contact_form" @submit.prevent="sendEmail" class="send">
            <div class="row">
              <div class="col-md-6 form-group">
                <input v-model="form.user_name" type="text" name="user_name" class="form-control" id="name" placeholder="Your Name" required>
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <input v-model="form.user_email" type="email" class="form-control" name="user_email" id="email" placeholder="Your Email" required>
              </div>
            </div>
            <div class="form-group mt-3">
              <input v-model="form.subject" type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
            </div>
            <div class="form-group mt-3">
              <textarea v-model="form.message" class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div class="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>

      </div>

      </div>
    </section><!-- End Contact Section -->  

</template>

<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { useStore } from 'vuex';
import { computed, onMounted, ref } from 'vue';
import emailjs from '@emailjs/browser';
import { useRouter } from 'vue-router';

const store = useStore();

const contact = computed(() => {
  return store.state.contactus;
});

const contact_form = ref(null);
let new_form = {};

const form = {
    user_name:'',
    user_email: '',
    subject: '',
    message: '',
    service_id: "service_0ltiw1g",
    template_id: "dealdrive_0fpecbe",
    user_id: "84Cf-v4RU4LGcbfYz"
};

const sendEmail = () => {
    emailjs.sendForm(form.service_id, form.template_id, contact_form.value, form.user_id)
        .then((result) => {
            contact_form.value.reset();
            alert("Your mail has been sent successfully. We will get back to you soon! Thanks.");
            
        }, (error) => {
            alert("Your mail was not sent successfully. Reach out to me dealdrivetechnology@gmail.com instead. Thanks.")
        });
    } 






</script>

<style scoped>
  
</style>
