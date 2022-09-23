<template>
    <div>
        <h1>Hello Admin</h1>
        <p>Edit your content </p>

        

        
    </div>
</template>

<script>
import {ref, computed} from 'vue'
import BaseModal from '../BaseModal.vue';
    export default {
        setup(){
            let showModal=ref(false)

            function toggleModal() {
                showModal.value = !showModal.value
                console.log(showModal)
            }

            return{
                showModal,
                toggleModal
            }
        },
       components:{
        BaseModal
       },
    }
</script>

<style scoped>


</style>