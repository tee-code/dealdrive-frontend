<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';


const store = useStore();

const contacts = computed(() => {
  return store.state.contacts;
});

</script>

<template>
 <!-- ======= Top Bar ======= -->
 <section id="topbar" class="d-flex align-items-center">
      <div class="container d-flex justify-content-center">
        <div class="contact-info ">
          <i class="bi bi-envelope"><a :href="'mailto:'+contacts.email">{{contacts.email}}</a></i>
          <i class="bi bi-phone"><span>{{contacts.phone}}</span></i>
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
