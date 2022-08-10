<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
   <main id="main">
    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs">
      <div class="page-header d-flex align-items-center" style="background-image: url('/assets/images/page-header.jpg');">
        <div class="container position-relative">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-8 text-center">
              <h2>Let's Have your Request</h2>
              <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
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
              <form action="" method="post" class="quote-form">
                <h3>Get a quote</h3>
                <p>Vel nobis odio laboriosam et hic voluptatem. Inventore vitae totam. Rerum repellendus enim linead sero park flows.</p>
                <div class="row gy-4">

                  <div class="col-md-6">
                    <input type="text" name="projecsname" class="form-control" placeholder="Service Name" required>
                  </div>

                  <div class="col-md-6">
                    <select id="inputPackage" class="form-control">
                        <option selected>Choose Package...</option>
                        <option>...</option>
                    </select>
                  </div>
  
                  <div class="col-md-6">
                    <input type="number" name="projecsname" class="form-control" placeholder="number of Designs" required>
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
              </form><!-- End Quote Form -->
  
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
