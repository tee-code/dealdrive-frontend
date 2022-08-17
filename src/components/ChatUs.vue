<template>
  <div class='layout'>
    <!-- ommited -->
    <SocialChat
      icon
      :attendants="attendants"
    >
      <template #header>
        <p>Get our customer support.</p>
      </template>
      <template #button>
        <img
          src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/whatsapp.svg"
          alt="icon whatsapp"
          aria-hidden="true"
        >      
      </template>
      <template #footer>
        <small>Opening hours: 8am to 6pm</small>
      </template>
    </SocialChat>
  </div>
</template>

<script setup>
import { computed } from '@vue/runtime-core';
import { SocialChat } from 'vue-social-chat';
import { useStore } from 'vuex';

const store = useStore();

const attendants = computed(() => {
    return store.state.attendants;
});

</script>