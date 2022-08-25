<script setup>
import { ref } from 'vue'
import Contact from '../components/Contact.vue';

defineProps({
  msg: String
});

</script>

<template>
  <main id="main" class="p-4">
    <Contact />
  </main>
  

</template>

<style scoped>

</style>
