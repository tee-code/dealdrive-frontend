<template>
   
<form ref="contact_form" @submit.prevent="sendEmail" class="send quote-form">
                      <h5>TAKE THE LEAD
                          TO DIGITIZING
                          YOUR BUSINESS
                          GROWTH</h5>
                      <p>Let's have your request</p>
                      <div class="row gy-4">
        
                        <div class="col-md-6">
                          <input v-model="form.project" type="text" name="project" class="form-control" placeholder="Name of Projects" required>
                        </div>
        
                        <div class="col-md-6">
                          <input v-model="form.location" type="text" name="location" class="form-control" placeholder="Your Location" required>
                        </div>
        
                        <div class="col-md-6">
                          <input v-model="form.time" type="text" name="time" class="form-control" placeholder="Timeframe" required>
                        </div>
        
                        <div class="col-md-6">
                          <input v-model="form.budget" type="text" name="budget" class="form-control" placeholder="Budget($)" required>
                        </div>
        
                        <div class="col-lg-12">
                          <h4>Your Company or Personal Details</h4>
                        </div>
        
                        <div class="col-md-12">
                          <input v-model="form.user_name" type="text" name="user_name" class="form-control" placeholder="Name" required>
                        </div>
        
                        <div class="col-md-12 ">
                          <input v-model="form.user_email" type="email" class="form-control" name="user_email" placeholder="Email" required>
                        </div>
        
                        <div class="col-md-12">
                          <input v-model="form.user_phone" type="text" class="form-control" name="user_phone" placeholder="Phone" required>
                        </div>
        
                        <div class="col-md-12">
                          <textarea v-model="form.message" class="form-control" name="message" rows="6" placeholder="Leave a Message" required></textarea>
                        </div>
        
                        <div class="col-md-12 text-center">
                          <div class="loading">Loading</div>
                          <div class="error-message"></div>
                          <div class="sent-message">Your quote request has been sent successfully. Thank you!</div>
        
                          <button type="submit">Get a quote</button>
                        </div>
        
                      </div>
                    </form>
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
    phone: '',
    message: '',
    budget: '',
    time: '',
    project: '',
    location: '',
    service_id: "service_0ltiw1g",
    template_id: "dealdrive_0fpecbe",
    user_id: "84Cf-v4RU4LGcbfYz"
};


const sendEmail = () => {
  contact_form.value[7].value = "Project: " + form.project + ".\n Budget : " + form.budget + ".\n Time: " + form.time + ".\n Location: "+form.location + ".\n Phone: " + form.phone + ".\n Message: " + form.message;
  // console.log(contact_form, ' form ');
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
