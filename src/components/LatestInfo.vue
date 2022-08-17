<template>
      <!-- ======= Call To Action Section ======= -->
    <section id="call-to-action" class="call-to-action">
      <div class="container" data-aos="zoom-out">

        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h3>{{news.title}}</h3>
            <p>{{ news.description }}</p>
            <a class="cta-btn" href="#">Join now</a>
            </div>
          </div>

        </div>
    </section><!-- End Call To Action Section -->
</template>

<script setup>

import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const news = computed(() => {
  return store.state.news;
});


</script>

<style scoped>
  
</style>
