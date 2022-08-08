<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

</script>

<template>
   <main id="main">
        <!-- ======= Breadcrumbs ======= -->
        <div class="breadcrumbs">
            <div class="page-header d-flex align-items-center" style="background-image: url('assets/images/page-header.jpg');">
                <div class="container position-relative">
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-6 text-center">
                            <h2>Services</h2>
                            <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <div class="container">
                    <ol>
                        <li><a href="index.html">Home</a></li>
                        <li>Services</li>
                    </ol>
                </div>
            </nav>
        </div>
        <!-- End Breadcrumbs -->


        <!-- ======= Services Section ======= -->
        <section id="service" class="services pt-0">
            <div class="container" data-aos="fade-up">

                <div class="section-header">
                    <span>Our Services</span>
                    <h2>Our Services</h2>

                </div>

                <div class="row gy-4">

                    <div class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div class="card">
                            <div class="card-img">
                                <img src="assets/images/features-1.png" alt="" class="img-fluid">
                            </div>
                            <h3 class="stretched-link">Branding</h3>
                            <p>Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil</p>
                            <div class="row d-flex mb-5 justify-content-center">
                                <a href="quotation.html" class="readmore text-center stretched-link"><span>Order serice</span><i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <!-- End Card Item -->

                    <div class="col-lg-6 col-md-6 w-80" data-aos="fade-up" data-aos-delay="200">
                        <div class="card">
                            <div class="card-img">
                                <img src="assets/images/features-2.png" alt="" class="img-fluid">
                            </div>
                            <h3><a href="service-details.html" class="stretched-link">Website</a></h3>
                            <p>Asperiores provident dolor accusamus pariatur dolore nam id audantium ut et iure incidunt molestiae dolor ipsam ducimus occaecati nisi</p>
                            <div class="row d-flex mb-5 justify-content-center">
                                <a href="quotation.html" class="readmore text-center stretched-link"><span>Order serice</span><i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <!-- End Card Item -->

                    <div class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div class="card">
                            <div class="card-img">
                                <img src="assets/images/features-3.png" alt="" class="img-fluid">
                            </div>
                            <h3><a href="service-details.html" class="stretched-link">Mobile App</a></h3>
                            <p>Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil</p>
                            <div class="row d-flex mb-5 justify-content-center">
                                <a href="quotation.html" class="readmore text-center stretched-link"><span>Order serice</span><i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <!-- End Card Item -->

                    <div class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="400">
                        <div class="card">
                            <div class="card-img">
                                <img src="assets/images/features-4.png" alt="" class="img-fluid">
                            </div>
                            <h3><a href="service-details.html" class="stretched-link">Desktop App</a></h3>
                            <p>Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil</p>
                            <div class="row d-flex mb-5 justify-content-center">
                                <a href="quotation.html" class="readmore text-center stretched-link"><span>Order serice</span><i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <!-- End Card Item -->

                </div>

            </div>
        </section>
        <!-- End Services Section -->

    </main>
    <!-- End #main -->

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
