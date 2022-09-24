<script setup>
import { ref } from 'vue'
import Quote from '../components/Quote.vue';

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
   <main id="main">
    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs">
      <div class="page-header d-flex align-items-center" style="">
        <div class="container position-relative">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 style="font-size: 2rem;">Lets Build Something AMAZING Together.</h2>
              <p>Tell us about your project, and our experts will be in touch with you to share ideas and recommendations for how to make it successful!</p>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div class="container">
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>GET Quote</li>
          </ol>
        </div>
      </nav>
    </div><!-- End Breadcrumbs -->


    <section id="get-a-quote" class="d-flex align-items-center ">
        <div class="container-md" data-aos="fade-up">
          <div class="row d-flex">
              <Quote />
          </div>
  
        </div>
      </section><!-- End Get a Quote Section -->
    </main><!-- End #main -->

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
