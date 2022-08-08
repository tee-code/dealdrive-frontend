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
        <div class="page-header d-flex align-items-center" style="background-image: url('../assets/images/page-header.jpg');">
          <div class="container position-relative">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-6 text-center">
                <h2>Service Detals</h2>
                <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <div class="container">
            <ol>
              <li><a href="index.html">Home</a></li>
              <li>Package-details</li>
            </ol>
          </div>
        </nav>
      </div><!-- End Breadcrumbs -->
    
        <!-- ======= Features Section ======= -->
    <section id="features" class="features">
      <div class="container" data-aos="fade-up">

        <ul class="nav nav-tabs row d-flex align-items-center justify-content-center">
          <li class="nav-item col-3">
            <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1">
              <i class='bx bxs-box' style='color:rgba(212,234,241,0.8)'  ></i>
              <h4 class="d-none d-lg-block">Silver</h4>
            </a>
          </li>
          <li class="nav-item col-3">
            <a class="nav-link" data-bs-toggle="tab" href="#tab-2">
              <i class='bx bx-diamond bx-tada bx-rotate-90' ></i>
              <h4 class="d-none d-lg-block">Diamond</h4>
            </a>
          </li>
          <li class="nav-item col-3">
            <a class="nav-link" data-bs-toggle="tab" href="#tab-3">
              <i class='bx bxs-package' style='color:rgba(210,151,23,0.78)'  ></i>
              <h4 class="d-none d-lg-block">Gold</h4>
            </a>
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane active show text-center" id="tab-1">
            <div class="row">
              <div class="row d-flex mb-5 justify-content-center">
               <div class="col-lg-6 order-2 order-lg-2 text-center">
                <div class="pricing-item">
                  <h3>Free Plan</h3>
                  <h4><sup>$</sup>0<span> / month</span></h4>
                  <ul>
                    <li><i class="bi bi-check"></i> Quam adipiscing vitae proin</li>
                    <li><i class="bi bi-check"></i> Nec feugiat nisl pretium</li>
                    <li><i class="bi bi-check"></i> Nulla at volutpat diam uteera</li>
                    <li class="na"><i class="bi bi-x"></i> <span>Pharetra massa massa ultricies</span></li>
                    <li class="na"><i class="bi bi-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
                  </ul>
                  <a href="#tab3-form" class="buy-btn modal-btn">Place Order</a>
                </div>
              </div>
             </div>
            </div>
          </div>
          <div class="tab-pane text-center" id="tab-2">
            <div class="row">
              <div class="row d-flex mb-5 justify-content-center">
               <div class="col-lg-6 order-2 order-lg-2 text-center">
                <div class="pricing-item">
                  <h3>Free Plan</h3>
                  <h4><sup>$</sup>0<span> / month</span></h4>
                  <ul>
                    <li><i class="bi bi-check"></i> Quam adipiscing vitae proin</li>
                    <li><i class="bi bi-check"></i> Nec feugiat nisl pretium</li>
                    <li><i class="bi bi-check"></i> Nulla at volutpat diam uteera</li>
                    <li class="na"><i class="bi bi-x"></i> <span>Pharetra massa massa ultricies</span></li>
                    <li class="na"><i class="bi bi-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
                  </ul>
                  <a href="#tab3-form" class="buy-btn modal-btn">Place Order</a>
                </div>
              </div>
             </div>
            </div>
          </div>
          <div class="tab-pane text-center" id="tab-3">
            <div class="row">
              <div class="row d-flex mb-5 justify-content-center">
               <div class="col-lg-6 order-2 order-lg-2 text-center">
                <div class="pricing-item">
                  <h3>Free Plan</h3>
                  <h4><sup>$</sup>0<span> / month</span></h4>
                  <ul>
                    <li><i class="bi bi-check"></i> Quam adipiscing vitae proin</li>
                    <li><i class="bi bi-check"></i> Nec feugiat nisl pretium</li>
                    <li><i class="bi bi-check"></i> Nulla at volutpat diam uteera</li>
                    <li class="na"><i class="bi bi-x"></i> <span>Pharetra massa massa ultricies</span></li>
                    <li class="na"><i class="bi bi-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
                  </ul>
                  <a href="#tab3-form" class="buy-btn modal-btn">Place Order</a>
                </div>
              </div>
             </div>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End Features Section -->

    
    <div class="col-lg-6 order-1 order-lg-1 mt-3 mt-lg-0">
      <div class="modal-overlay">
        <section class="modal-container" style="overflow-y:scroll";>
          <div class="container" data-aos="fade-up">
            <div class="row">
              <div class="col-lg-12">
                <form action="" method="post"  class="send">
                  <h3 id="tab3-form">Package Request Form</h3>
                  <div class="row">
                  <div class="form-group col-md-6">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="inputname" placeholder="Enter name">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputEmail">Email</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="Enter Email">
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputAddress">Address</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                </div>
                <div class="row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control" id="inputCity">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-md-6">
                    <label for="inputCountry">Country</label>
                    <select id="inputCountry" class="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPackage">Package</label>
                    <select id="inputPackage" class="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label for="choose">Choose your desgns</label><br><br>
                <div class="form-check form-check-inline">
                  <label class="form-check-label" for="inlineCheckbox1">Logo</label>
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                </div>
                <div class="form-check form-check-inline">
                  <label class="form-check-label" for="inlineCheckbox2">Bcard</label>
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                </div>
                <div class="form-check form-check-inline">
                  <label class="form-check-label" for="inlineCheckbox1">Letterhead</label>
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                </div>
                <div class="form-check form-check-inline">
                  <label class="form-check-label" for="inlineCheckbox2">Envelop</label>
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                </div>
                <div class="form-check form-check-inline">
                  <label class="form-check-label" for="inlineCheckbox1">Brochure</label>
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                  
                </div>
              </div>
                  <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div class="text-center">
                    <button type="submit">submit</button>
                    <button class="close-btn"><i class="fas fa-times"></i></button>
                  </div>
                </form>
              </div><!-- End Quote Form -->
    
            </div>
    
          </div>
        </section><!-- End Get a Quote Section -->
    </div>
    </div>
    
      </main><!-- End #main -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
