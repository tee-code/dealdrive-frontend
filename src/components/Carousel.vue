<template>

<div id="demo" class="carousel slide" data-bs-ride="carousel">

  <!-- Indicators/dots -->
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" :data-bs-slide-to="slides[0].id" class="active"></button>
    <button type="button" data-bs-target="#demo" :data-bs-slide-to="slides[1].id"></button>
    <button type="button" data-bs-target="#demo" :data-bs-slide-to="slides[2].id"></button>
    <button type="button" data-bs-target="#demo" :data-bs-slide-to="slides[3].id"></button>
    <button type="button" data-bs-target="#demo" :data-bs-slide-to="slides[4].id"></button>
    <button type="button" data-bs-target="#demo" :data-bs-slide-to="slides[5].id"></button>
    
  </div>
  
  <!-- The slideshow/carousel -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img :src="slides[0].image" alt="Los Angeles" class="d-block" style="width:100%">
      <div class="carousel-caption">
        <h3>{{slides[0].title}}</h3>
        <p>{{slides[0].caption}}</p>
        <button data-bs-toggle="modal" data-bs-target="#quoteModal" type="button" href="#" class="btn-get-started modal-btn scrollto">Reguest for quote</button>
      </div>
    </div>
    <div class="carousel-item">
      <img :src="slides[1].image" alt="Los Angeles" class="img-fluid" style="width:100%">
      <div class="carousel-caption">
        <h3>{{slides[1].title}}</h3>
        <p>{{slides[0].caption}}</p>
        <button data-bs-toggle="modal" data-bs-target="#quoteModal" type="button" href="#" class="btn-get-started modal-btn scrollto">Reguest for quote</button>
      </div>
    </div>
    <div class="carousel-item">
      <img :src="slides[2].image" alt="Los Angeles" class="img-fluid" style="width:100%">
      <div class="carousel-caption">
        <h3>{{slides[2].title}}</h3>
        <p>{{slides[0].caption}}</p>
        <button data-bs-toggle="modal" data-bs-target="#quoteModal" type="button" href="#" class="btn-get-started modal-btn scrollto">Reguest for quote</button>
      </div>
    </div>
    <div class="carousel-item">
      <img :src="slides[3].image" alt="Los Angeles" class="img-fluid" style="width:100%">
      <div class="carousel-caption">
        <h3>{{slides[3].title}}</h3>
        <p>{{slides[0].caption}}</p>
        <button data-bs-toggle="modal" data-bs-target="#quoteModal" type="button" href="#" class="btn-get-started modal-btn scrollto">Reguest for quote</button>
      </div>
    </div>
    <div class="carousel-item">
      <img :src="slides[4].image" alt="Los Angeles" class="img-fluid" style="width:100%">
      <div class="carousel-caption">
        <h3>{{slides[4].title}}</h3>
        <p>{{slides[0].caption}}</p>
        <button data-bs-toggle="modal" data-bs-target="#quoteModal" type="button" href="#" class="btn-get-started modal-btn scrollto">Reguest for quote</button>
      </div>
    </div>
    <div class="carousel-item">
      <img :src="slides[5].image" alt="Los Angeles" class="img-fluid" style="width:100%">
      <div class="carousel-caption">
        <h3>{{slides[5].title}}</h3>
        <p>{{slides[0].caption}}</p>
        <button data-bs-toggle="modal" data-bs-target="#quoteModal" type="button" href="#" class="btn-get-started modal-btn scrollto">Reguest for quote</button>
      </div>
    </div>
   
  </div>
  
  <!-- Left and right controls/icons -->
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
  
</template>

<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const slides = computed(() => {
  return store.state.slides;
});

</script>

<style scoped>
  section.carousel{
    padding: 0 !important;
  }
  .carousel-caption{
    right: 0 !important;
    top: 0% !important;
    left: 0% !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .carousel-caption h3{
    font-weight: bolder;
    color: black;
    font-size: 2rem;
  }
  .carousel-caption p{
    font-weight: bold;
    color: black;
    font-size: 1rem;
    
  }
  .carousel-caption button{
    background: rgba(13,66,255,0.8);
    color: white;
    padding: 1rem;
    border: none;
    outline: none;
    border-radius: 5px;
  }

  #demo{
    margin-top: 100px;
  }
</style>
