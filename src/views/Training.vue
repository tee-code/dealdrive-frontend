<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const training = computed(() => {
  return store.state.training;
});

const {cardContent, title, banner, bannerContent, courseContent, sections} = training.value;
const {courses, levels} = courseContent;


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
              <div class="col-lg-6 text-center">
                <h2>{{training.title}}</h2>
                <p>{{training.bannerContent}}</p>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <div class="container">
            <ol>
              <li><a href="index.html">Home</a></li>
              <li>Training</li>
            </ol>
          </div>
        </nav>
    </div><!-- End Breadcrumbs -->

    <div class="container mb-5" data-aos="fade-up">

      <div class="section-header">
          <span>{{cardContent.heading1}}</span>
          <h2>{{cardContent.heading1}}</h2>
          <h4>{{cardContent.heading2}}</h4>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="(content) in cardContent.contents" :key="content">
          <div class="card h-100 text-center">
            <img :src="content.icon" class="card-img-top mx-auto" style="width: 100px;"
              :alt="content.title" />
            <div class="card-body">
              <h5 class="card-title">{{content.title}}</h5>
              <p class="card-text">
                {{content.content}}
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </div>

    <div class="container mb-5">
      <div class="section-header">
          <span>{{courseContent.heading1}}</span>
          <h2>{{courseContent.heading1}}</h2>
          <h4>{{courseContent.heading2}}</h4>
      </div>    
      

      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div type="button" class="col cursor-pointer" v-for="(course) in courses" :key="course" data-bs-toggle="offcanvas" :data-bs-target="'#offcanvasTop'+course.id" aria-controls="offcanvasTop">
          <div class="card h-100 text-center">
            <img :src="course.image" class="card-img-top mx-auto"
              :alt="course.title" />
            <div class="card-body">
              <h5 class="card-title">{{course.title}}</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, cumque.
              </p>
            </div>
            <div class="card-footer">
              <span v-for="level in levels" :key="level" :class="['badge rounded-pill mx-2', level.id == 2 ? 'orange' : 'blue']">{{level.title}}-{{level.duration}}</span>
            </div>
          </div>

          <div style="height: 100vh !important;" class="offcanvas offcanvas-bottom" tabindex="-1" :id="'offcanvasTop'+course.id" aria-labelledby="offcanvasTopLabel">
            <div class="offcanvas-header">
              <h5 id="offcanvasTopLabel">Course ({{course.title}})</h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
               <div class="container mb-5" data-aos="fade-up" v-for="level in levels" :key="level">

                <div class="section-header">
                    <span>{{level.title}}</span>
                    <h2>{{level.title}}</h2>
                </div>
                <div class="row row-cols-1">
                  <div class="col">
                    <div class="h-100">
                      <p class="text-center">
                      
                        <span :class="['badge rounded-pill mx-2', level.id == 2 ? 'orange' : 'blue']">{{level.title}}-{{level.duration}}</span>
                      </p>
                      <p class="text-center">{{ level.content}}</p>
                      
                    </div>
                    
                  </div>
                </div>

              </div>

              <div class="container mb-5"  v-for="section in course.content.sections" :key="section">

                <div class="section-header">
                    <span>{{section.title}}</span>
                    <h2>{{section.title}}</h2>
                </div>
                <div class="row row-cols-1">
                  <div class="col">
                    <div class="h-100">
                      <p class="text-center" v-for="text in section.content.split('*')" :key="text">{{ text }}</p>
                      <ul class="list-group text-left" v-if="section.options">
                        <li class="list-group-item text-left" v-for="option in section.options" :key="option">{{option}}</li>
                      </ul>
                    </div>
                    
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="container mb-5" data-aos="fade-up" v-for="section in sections" :key="section.id">

      <div class="section-header">
          <span>{{section.title}}</span>
          <h2>{{section.title}}</h2>
      </div>
      <div class="row row-cols-1">
        <div class="col">
          <div class="h-100">
            <p class="text-center">{{ section.content}}</p>
            <ul class="list-group text-left" v-if="section.options">
              <li class="list-group-item text-left" v-for="option in section.options" :key="option">{{option}}</li>
          </ul>
          </div>
          
        </div>
      </div>

    </div>
    
  </main><!-- End #main -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.canvas{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw !important;
  height: 100vh !important;
}
</style>
