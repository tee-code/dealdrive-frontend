<script setup>
import { ref } from 'vue'
import Contact from '../components/Contact.vue';

defineProps({
  msg: String
});

</script>

<template>
  <main id="main" class="p-4">
     <!-- ======= Breadcrumbs ======= -->
        <div class="breadcrumbs">
            <div class="page-header d-flex align-items-center" style="">
                <div class="container position-relative">
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-6 text-center">
                            <h2>Contact Us</h2>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <div class="container">
                    <ol>
                        <li><router-link :to="{name: 'Index'}">Home</router-link></li>
                        <li>Contact</li>
                    </ol>
                </div>
            </nav>
        </div>
        <!-- End Breadcrumbs -->
    <Contact />
  </main>
  

</template>

<style scoped>

</style>
