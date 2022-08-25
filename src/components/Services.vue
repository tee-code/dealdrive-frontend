<template>
<!-- ======= Services Section ======= -->
        <section 
        :style="{'background-image':`linear-gradient(to right, rgba(16, 25, 136, .8), rgba(243, 19, 107, .8)), url(${services[0].image})`}"
        id="service" class="services pt-0 slant-up">
            <div class="container col-md-10 col-lg-8 mx-auto" data-aos="fade-up">

                <div class="section-header">
                    <span style="backround-color: whitesmoke;">Our Services</span>
                    <h2 style="color: whitesmoke;">Our Services</h2>

                </div>
                <div class="row gy-4 rounded-5">
                    <div v-for="service in services" :key="service" class="col-lg-4 col-md-4 rounded-5" data-aos="fade-up" data-aos-delay="100">
                        <div class="card rounded-5">
                            <div class="card-img rounded-5">
                                <img :src="service.image" alt="" class="img-fluid">
                            </div>
                            <h3 class="stretched-link text-center service-title">{{service.title}}</h3>
                            <p class="text-justify">{{service.short_desc}}</p>
                            <div class="row d-flex mb-5 justify-content-center">
                                <router-link :to="{name: 'Services'}" class="readmore text-center stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></router-link>
                            </div>
                        </div>
                    </div>
                    <!-- End Card Item -->


                </div>

            </div>
        </section>
        <!-- End Services Section -->

</template>

<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const services = computed(() => {
  return store.state.services;
});


</script>

<style scoped>
  
</style>
