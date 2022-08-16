<script setup>
import { ref } from 'vue'


</script>

<template>
 <!-- ======= Top Bar ======= -->
 <section id="topbar" class="d-flex align-items-center">
      <div class="container d-flex justify-content-center">
        <div class="contact-info ">
          <i class="bi bi-envelope"><a href="mailto:contact@dealdrivetechnology.com">contact@dealdrivetechnology.com</a></i>
          <i class="bi bi-phone"><span>+234 806 1467 293</span></i>
        </div>
      </div>
    </section><!-- End Top Bar-->
    

</template>

<style scoped>
.contact-info{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  padding: 1em;
}
@media screen and (min-width:60rem) {
  .contact-info{
    flex-direction: row;
  }
  .contact-info i{
    margin: 0 2em;
  }
}
</style>
