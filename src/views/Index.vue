<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex';
import Carousel from '../components/Carousel.vue';
import Services from '../components/Services.vue';
import LatestInfo from '../components/LatestInfo.vue';
import Testimonials from '../components/Testimonials.vue';
import Contact from '../components/Contact.vue';
import About from '../components/About.vue';
import FAQ from '../components/FAQ.vue';

const store = useStore();

const about = computed(() => {
  return store.state.about;
});

const categories = computed(() => {
  return store.state.categories;
});

const projects = computed(() => {
  return store.state.projects;
});

defineProps({
  msg: String
})

</script>

<template>
  <div>
    
    <!-- ======= hero Section ======= -->
    
     <Carousel />

    <!-- ======= Get a Quote Section ======= -->
    <!-- modal -->
    <div class="modal fade" id="quoteModal" tabindex="-1" aria-labelledby="quoteModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Get a quote</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
                  <div class="col-lg-12">
                    <form action="" method="post" class="quote-form">
                      <h3>Get a quote</h3>
                      <p>Vel nobis odio laboriosam et hic voluptatem. Inventore vitae totam. Rerum repellendus enim linead sero park flows.</p>
                      <div class="row gy-4">
        
                        <div class="col-md-6">
                          <input type="text" name="projecsname" class="form-control" placeholder="Name of Projects" required>
                        </div>
        
                        <div class="col-md-6">
                          <input type="text" name="location" class="form-control" placeholder="Your Location" required>
                        </div>
        
                        <div class="col-md-6">
                          <input type="text" name="time" class="form-control" placeholder="Timeframe" required>
                        </div>
        
                        <div class="col-md-6">
                          <input type="text" name="dimensions" class="form-control" placeholder="Budget($)" required>
                        </div>
        
                        <div class="col-lg-12">
                          <h4>Your Company or Personal Details</h4>
                        </div>
        
                        <div class="col-md-12">
                          <input type="text" name="name" class="form-control" placeholder="Name" required>
                        </div>
        
                        <div class="col-md-12 ">
                          <input type="email" class="form-control" name="email" placeholder="Email" required>
                        </div>
        
                        <div class="col-md-12">
                          <input type="text" class="form-control" name="phone" placeholder="Phone" required>
                        </div>
        
                        <div class="col-md-12">
                          <textarea class="form-control" name="message" rows="6" placeholder="Leave a Message" required></textarea>
                        </div>
        
                        <div class="col-md-12 text-center">
                          <div class="loading">Loading</div>
                          <div class="error-message"></div>
                          <div class="sent-message">Your quote request has been sent successfully. Thank you!</div>
        
                          <button type="submit">Get a quote</button>
                        </div>
        
                      </div>
                    </form>
                  </div><!-- End Quote Form -->
        
                </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    
    <main id="main">

      <About />

      <!-- ======= Portfolio Section ======= -->
      <section id="portfolio" class="portfolio">
        <div class="container" data-aos="fade-up">
          <div class="section-header">
            <span>Our Projects</span>
            <h2>Our Projects</h2> 
            <p>Check our completed jobs on Branding, web and software application.
Every projects we build are chanel towards a particular use case that might apply to your business needs. Explore our finished projects below</p>
          </div>

          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" class="filter-active">All</li>
                <li v-for="category in categories" :key="category.id" :data-filter="category.class">{{ category.name }}</li>          
              </ul>
            </div>
          </div>

          <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

            <div v-for="project in projects" :key="project" :class="['col-lg-4 col-md-6 portfolio-item', project.class]">
              <img :src="project.image" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>{{project.name}}</h4>
                <p>{{project.desc}}</p>
                <a :href="project.image" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" :title="project.name"><i class="bx bx-plus"></i></a>
                <router-link :to="{name: 'Projects', params: {id: project.id }}" class="details-link" title="More Details"><i class="bx bx-link"></i></router-link>
              
              </div>
            </div>
            
          </div>

        </div>
      </section><!-- End Portfolio Section -->
    <Services />

    <FAQ />

    <LatestInfo />

    <Testimonials />
     
    <Contact />
    </main><!-- End #main -->
  </div>
</template>

<style scoped>

/* SERVICE SECTION */
.box{
  box-shadow: 0px 2px 4px #aaa;
  border-radius: 5px;
  padding: 0.9em;
}
.box:hover{
  box-shadow: 0px 4px 18px #aaaa;
}
.box .icon i{
  font-size: 2.5rem;
}

/* HERO SECTION */
#hero{
  margin-top: 100px;
  z-index: 1;
}
</style>
