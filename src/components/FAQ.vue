<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const faqs = computed(() => {
  return store.state.faqs;
});

store.dispatch('getData', 'faqs');


</script>

<template>
   <!-- ======= Frequently Asked Questions Section ======= -->
    <section id="faq" class="faq">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <span>Frequently Asked Questions</span>
          <h2>Frequently Asked Questions</h2>

        </div>

        <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
          <div class="col-lg-10">

            <div class="accordion accordion-flush" id="faqlist">

              <div v-for="faq in faqs" :key="faq" class="accordion-item">
                <h5 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#faq-content-' +faq.id">
                    <i class="bi bi-question-circle question-icon"></i>
                    {{faq.question}}
                  </button>
                </h5>
                <div :id="'faq-content-' + faq.id" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div class="accordion-body">
                    {{ faq.answer }}
                  </div>
                </div>
              </div><!-- # Faq item-->


            </div>

          </div>
        </div>

      </div>
    </section><!-- End Frequently Asked Questions Section -->
</template>

<style scoped>

</style>
