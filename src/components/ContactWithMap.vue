<template>
   <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Contact Us</h2>
          <p>Need Help? <span>Contact Us</span></p>
        </div>

        <div class="mb-3">
          <iframe style="border:0; width: 100%; height: 200px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.29258293895!2d7.911139914090669!3d5.05624513639351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d571dcfc03fc9%3A0x39bdf82a321d3622!2sDealdrive%20technology!5e0!3m2!1sen!2sng!4v1655918778606!5m2!1sen!2sng" frameborder="0" allowfullscreen></iframe>
        </div><!-- End Google Maps -->

        <div class="row gy-4">

          <div class="col-md-6">
            <div class="info-item  d-flex align-items-center">
              <i class="icon bi bi-map flex-shrink-0"></i>
              <div>
                <h3>Our Address</h3>
                <p>{{contact.address}}</p>
              </div>
            </div>
          </div><!-- End Info Item -->

          <div class="col-md-6">
            <div class="info-item d-flex align-items-center">
              <i class="icon bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                
                <p>{{contact.email2}}</p>
              </div>
            </div>
          </div><!-- End Info Item -->

          <div class="col-md-6">
            <div class="info-item  d-flex align-items-center">
              <i class="icon bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>{{contact.phone1}}</p>
                <p>{{contact.phone2}}</p>
              </div>
            </div>
          </div><!-- End Info Item -->

          <div class="col-md-6">
            <div class="info-item  d-flex align-items-center">
              <i class="icon bi bi-share flex-shrink-0"></i>
              <div>
                <h3>Opening Hours</h3>
                <div><strong>Mon-Fri:</strong> 8AM - 5PM;
                  <strong>Sat:</strong> 9AM - 3PM;
                  <strong>Sunday:</strong> Closed
                </div>
              </div>
            </div>
          </div><!-- End Info Item -->

        </div>

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
        <!--End Contact Form -->

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
