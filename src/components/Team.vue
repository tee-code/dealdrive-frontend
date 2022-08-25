<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const teams = computed(() => {
  return store.state.teams;
});


</script>

<template>
<!-- ======= Team Section ======= -->
    <section id="team" class="team">
      <div class="container">

        <div class="section-header">
          <span>Our Team</span>
          <h2>Meet Our Team</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <!-- Page Content -->
<div class="container">
  <div class="row">
   
    <!-- Team Member  -->
    <div class="col-xl-3 col-md-6 mb-4" v-for="team in teams" :key="team">
      <div class="card border-0 shadow">
        <img :src="team.image" class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5 class="card-title mb-0">{{team.name}}</h5>
          <div class="card-text text-black-50">{{team.title}}</div>
          <div class="social d-flex justify-content-around ">
                  <a v-for="social in team.socials" :key="social" 
                  :href="social.profile"><i :class="social.icon"></i></a>
                  
                </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /.row -->

</div>
<!-- /.container -->

      </div>
    </section><!-- End Team Section -->
 
</template>

<style scoped>

</style>
