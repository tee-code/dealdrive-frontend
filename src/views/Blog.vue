<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex';

const store = useStore();

defineProps({
  msg: String
})
const blogs = computed(()=>{
  return store.state.posts
});

store.dispatch('getData', 'posts');

</script>

<template>
   <main id="main">
      <!-- ======= Hero Slider Section ======= -->
    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs">
      <div class="container" data-aos="fade-in">
        <div class="row">
          <div class="col-12">
           <div class="page-header d-flex align-items-center" style="">
        <div class="container position-relative">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-6 text-center">
              <h2>Blog</h2>
              <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
      <nav>
        <div class="container">
          <ol>
            <li><router-link :to="{name: 'Index'}">Home</router-link></li>
            <li><router-link :to="{name: 'Blog'}">Blog</router-link></li>
          </ol>
        </div>
      </nav>
    </div><!-- End Breadcrumbs -->

    <!-- ======= Search Results ======= -->
    <section id="post" class="post">
      <div class="container">
        <div class="row">
          <div class="col-md-9" >
              
            <div class="d-md-flex post-entry-2 small-img" v-for="blog in blogs" :key="blog.id">
              <router-link :to="{name: 'blogReadMore',params:{id:blog.id} }" class="me-4 thumbnail">
                <img :src="blog.image" alt="" class="img-fluid">
              </router-link>
              <div>
                
                <div class="post-meta"><span class="date">{{blog.category}}</span> <span class="mx-1">&bullet;</span> <span>{{blog.date}}</span></div>
                <h3><router-link :to="{name: 'blogReadMore', params:{id:blog.id} }">{{blog.title}}</router-link></h3>
                <p>{{blog.description}}</p>

                <!-- <router-link :to="{name: 'ReadMore', prams:'{blog.id}'}"><button>ReadMore</button></router-link> -->
                <div class="d-flex align-items-center author">
                  <div class="photo"><img :src="blog.userProfile.image" alt="" class="img-fluid"></div>
                  <div class="name">
                    <h3 class="m-0 p-0">{{blog.userProfile.name}}</h3>
                  </div>
                </div>
              </div>
            </div>

            

            <!-- Paging -->
            <div class="text-start py-4">
              <div class="custom-pagination">
                <a href="#" class="prev">Prevous</a>
                <a href="#" class="active">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#" class="next">Next</a>
              </div>
            </div><!-- End Paging -->

          </div>

          
          <!-- <div class="col-md-3">
            
            <div class="aside-block">

              <ul class="nav nav-pills custom-tab-nav mb-4" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="pills-popular-tab" data-bs-toggle="pill" data-bs-target="#pills-popular" type="button" role="tab" aria-controls="pills-popular" aria-selected="true">Popular</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-latest-tab" data-bs-toggle="pill" data-bs-target="#pills-latest" type="button" role="tab" aria-controls="pills-latest" aria-selected="false">Latest</button>
                </li>
              </ul>

              <div class="tab-content" id="pills-tabContent">

               
                <div class="tab-pane fade show active" id="pills-popular" role="tabpanel" aria-labelledby="pills-popular-tab">
                  <div class="post-entry-1 border-bottom">
                    <div class="post-meta"><span class="date">Lifestyle</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                    <h2 class="mb-2"><a href="#">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</a></h2>
                    <span class="author mb-3 d-block">Jenny Wilson</span>
                  </div>

                  <div class="post-entry-1 border-bottom">
                    <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                    <h2 class="mb-2"><a href="#">9 Half-up/half-down Hairstyles for Long and Medium Hair</a></h2>
                    <span class="author mb-3 d-block">Jenny Wilson</span>
                  </div>

                  <div class="post-entry-1 border-bottom">
                    <div class="post-meta"><span class="date">Lifestyle</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                    <h2 class="mb-2"><a href="#">Life Insurance And Pregnancy: A Working Mom’s Guide</a></h2>
                    <span class="author mb-3 d-block">Jenny Wilson</span>
                  </div>

                  <div class="post-entry-1 border-bottom">
                    <div class="post-meta"><span class="date">Business</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                    <h2 class="mb-2"><a href="#">The Best Homemade Masks for Face (keep the Pimples Away)</a></h2>
                    <span class="author mb-3 d-block">Jenny Wilson</span>
                  </div>
                </div> 
                <div class="tab-pane fade" id="pills-latest" role="tabpanel" aria-labelledby="pills-latest-tab">
                  <div class="post-entry-1 border-bottom">
                    <div class="post-meta"><span class="date">Lifestyle</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                    <h2 class="mb-2"><a href="#">Life Insurance And Pregnancy: A Working Mom’s Guide</a></h2>
                    <span class="author mb-3 d-block">Jenny Wilson</span>
                  </div>

                  <div class="post-entry-1 border-bottom">
                    <div class="post-meta"><span class="date">Sport</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                    <h2 class="mb-2"><a href="#">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                    <span class="author mb-3 d-block">Jenny Wilson</span>
                  </div>

                  <div class="post-entry-1 border-bottom">
                    <div class="post-meta"><span class="date">Lifestyle</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                    <h2 class="mb-2"><a href="#">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</a></h2>
                    <span class="author mb-3 d-block">Jenny Wilson</span>
                  </div>

                  <div class="post-entry-1 border-bottom">
                    <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                    <h2 class="mb-2"><a href="#">9 Half-up/half-down Hairstyles for Long and Medium Hair</a></h2>
                    <span class="author mb-3 d-block">Jenny Wilson</span>
                  </div>

                </div> 

              </div>
            </div>

            <div class="aside-block">
              <h3 class="aside-title">Video</h3>
              <div class="video-post">
                <a href="https://www.youtube.com/watch?v=AiFfDjmd0jU" class="glightbox link-video">
                  <span class="bi-play-fill"></span>
                  <img src="/assets/images/post/post-landscape-5.jpg" alt="" class="img-fluid">
                </a>
              </div>
            </div>

            <div class="aside-block">
              <h3 class="aside-title">Tags</h3>
              <ul class="aside-tags list-unstyled">
                <li><a href="#">Business</a></li>
                <li><a href="#">Branding</a></li>
                <li><a href="#">Design</a></li>
                <li><a href="#">Website</a></li>
                <li><a href="#">Logo</a></li>
                <li><a href="#">Mobile app</a></li>
                <li><a href="#">Software</a></li>
                <li><a href="#">Blockchain</a></li>
              </ul>
            </div>

          </div> -->

        </div>
      </div>
    </section> 

    </main>
</template>

<style scoped>

</style>
