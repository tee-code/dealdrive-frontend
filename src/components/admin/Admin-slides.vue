<template>
    <div>
        <h1>Slides section</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, perspiciatis quod voluptatum aperiam quaerat sint corporis autem dolore doloribus voluptatem amet similique quasi dolor quo maxime voluptates maiores dignissimos pariatur?  Sunt repudiandae voluptatem, magni incidunt, excepturi expedita fugiat recusandae non pariatur, ipsum iste delectus?</p>

        <div class="button-section">
            <button @click="toggleModal">Edit</button>
        </div>

        <BaseModal v-show="showModal" @closeModal="toggleModal">
            <h1 class="title">Slides Edit Form</h1>

            <form action="">
                
                <input type="text" placeholder="Id">
                <input type="text" placeholder="Title">
                
                <input type="file" placeholder="Chose image">

                <textarea name="" id="" cols="30" rows="10" placeholder="Caption"></textarea>

                <button type="submit" class="success">Save</button>
            </form>
        </BaseModal>
    </div>
</template>

<script>
    import {ref} from 'vue'
import BaseModal from '../BaseModal.vue';
    export default {
        setup(){
            let showModal=ref(false)

            function toggleModal() {
                showModal.value = !showModal.value
            }

            return{
                showModal,
                toggleModal
            }
        },
       components:{
        BaseModal
       } 
    }
</script>

<style scoped>

input::placeholder{
    font-size: 1.4rem;
}
.title{
    text-align: center;
}
div p{
    text-align: justify;
}


.success{
    background-color: green;
}
form input,textarea{
    width: 100%;
    margin-top: 2em;
}
input{
    padding: 1em;
    
}
form button{
    width: 100%;
    margin-bottom: 2em;
    padding: .2em;
    font-size: 2rem;
}

</style>