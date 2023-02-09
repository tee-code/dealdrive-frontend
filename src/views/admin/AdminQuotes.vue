<template>
    <div>
        <div class="d-flex flex-row justify-content-between">
            
            <h1 class="section-title">Quotes Section</h1>
           
        </div>
        <table style="width:100%">
            <tr>
                <th>Id</th>
                <th>Name of Project</th>
                <th>Location</th>
                <th>Time Frame</th>
                <th>Budget</th>
                <th>Name of Company</th>
                <th>Email</th>
                <th>Date</th>
                <th>Actions</th>
            </tr>

            <tr v-for="quote in quotes" :key="quote.id">
                <td>{{quote.id}}</td>
                <td>{{ quote.name_of_project }} </td>
                <td>{{quote.location}}</td>
                <td>{{quote.timeFrame}}</td>
                <td>{{quote.budget}}</td>
                <td>{{quote.name_of_company}}</td>
                <td>{{quote.email}}</td>
                <td>{{new Date(quote.created_at)}}</td>

            
                <td>
                   <div class="button-section">
                        <button class="info" @click="toggleModal(quote.id)">View Message</button>
                        <!-- <button class="danger" @click="deleteData(team.id)">Delete</button> -->
                     </div> 
                </td>
                 <BaseModal v-if="showModal && currentModalIndex == quote.id" @closeModal="toggleModal(quote.id)">
                    <h1 class="title">View Message</h1>

                   <div class="p-3">{{ quote.message }}</div>
                </BaseModal>
            </tr>

        </table>
       
    </div>
</template>

<script setup>

import {computed, ref} from 'vue'
import { useStore } from 'vuex';
import BaseModal from '../../components/BaseModal.vue';

const store = useStore();

const quotes = computed(() => {
    return store.state.quotes;
});

store.dispatch('getData', 'quotes');


let showModal=ref(false);

let currentModalIndex = ref(null);


// function handleFileUpload(event){
//     slide.image = event.target.files[0];
// }

function toggleModal(id) {

    currentModalIndex.value = id;

    showModal.value = !showModal.value;

    // console.log(showModal, currentModalIndex.value);

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
div>h1{
    text-align: center;
}

/* Table */
table,tr,td,th{
    border: 1px solid #aaa;
}

tr th{
  text-align: center; 
}
tr td{
    text-align: justify;
    padding: .8em;
}
</style>