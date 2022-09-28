<template>
    <div class="Home">
        <div class="wrapper">
            <h1>Hello Admin</h1>
            <p>Edit your content </p>

        </div>
        

        
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
.Home{
    display: flex;
    justify-content: center;
    align-content: center;
    border-radius: 5px;
    box-shadow: 2px 4px 8px #aaa;
}

.wrapper{
    padding: 1em;
    font-size: 1.5rem;
}
.wrapper h1{
    font-size: 3rem;
}

</style>