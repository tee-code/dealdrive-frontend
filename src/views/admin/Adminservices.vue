<template>
    <div>
        <div class="d-flex flex-row justify-content-between">
            <h1 class="section-title">Service section</h1>
            <button class="info bg-primary text-white border-0 px-4 mb-2" @click="toggleModal(0)">Create Service</button>
            <BaseModal v-if="showModal && currentModalIndex == 0" @closeModal="toggleModal(0)">

                    <h1 class="title">Create Service</h1>

                    <form id="createService" @submit="createData">

                        <input name="image" type="file" accept="image/*"  placeholder="Choose image" @change="handleFileUpload( $event )">

                        <input name="title" type="text" placeholder="Title">

                        <input name="short_desc" type="text" placeholder="Short description">

                        <textarea name="description" id="" cols="30" rows="10" placeholder="Main Description"></textarea>

                        <button type="submit" class="success">Save</button>

                    </form>

            </BaseModal>
        </div>
        
        <table style="width:100%">
            <tr>
                <th>Title</th>
                <th>Short Description</th>
                <th>Description</th>
                <th>Image</th>
                <th>Actions</th>
            </tr>
            
            <tr v-for="service in services" :key="service.id">
                <td>{{service.title}}</td>
                <td>{{service.short_desc}}</td>
                <td>
                    {{ service.description }}
                </td>
                <td><img style="width:100px; height:100px" :src="service.image" :alt="service.title"></td>
                <td>
                   <div class="button-section">
                        <button class="info" @click="toggleModal(service.id)">Edit</button>
                        <button class="danger" @click="deleteData(service.id)" >Delete </button>
                     </div> 
                </td>

                <BaseModal key="service.id" v-if="showModal && currentModalIndex == service.id" @closeModal="toggleModal(service.id)">

                    <h1 class="title">Service Edit Form {{service.title}}</h1>
                    
                    <img :src="service.image" alt="Current Image" width="100" height="100">

                    <form id="updateService" @submit.prevent="updateData(service.id)">

                        <input name="image" type="file" accept="image/*" placeholder="Chose image" @change="handleFileUpload( $event )">
                        
                        <label>Title</label>
                        <input name="title" type="text" placeholder="Title" :value="service.title">
                        
                        <label>Short Desc</label>
                        <input name="short_desc" type="text" placeholder="Short description" :value="service.short_desc">

                        <label>Full Desc</label>
                        <textarea name="description" id="" cols="30" rows="10" placeholder="Main Description" :value="service.description"></textarea>

                        <button type="submit" class="success">Save</button>

                    </form>

                </BaseModal>
            </tr>

        </table>

    </div>
</template>

<script setup>

import {computed, onMounted, ref} from 'vue'
import { useStore } from 'vuex';
import BaseModal from '../../components/BaseModal.vue';

const store = useStore();

const services = computed(() => {
    return store.state.services;
});

// console.log(services, ' services')

store.dispatch('getData', 'services');


let showModal=ref(false);

let currentModalIndex = ref(null);

// const service = {

//     title: "",
//     short_desc: "",
//     description: "",
//     image: ""

// }

function handleFileUpload(event){
    //service.image = event.target.files[0];
}



// formData.append('image', service.image);
// formData.append('title', service.title);
// formData.append('short_desc', service.short_desc);
// formData.append('description', service.description);

function toggleModal(id) {

    currentModalIndex.value = id;

    showModal.value = !showModal.value;

    // console.log(showModal, currentModalIndex.value);

}

function deleteData(id){

    store.dispatch('deleteData', `services/${id}`)
        .then((data) => {
            store.dispatch('getData', 'services');
            alert('Deleted Successfully!');
        }).catch((e) => {
            alert('Uable to delete data');
        });
}

function createData(e){

    e.preventDefault();

    const form = document.querySelector('form#createService');
    
    let formData = new FormData(form);

    const data = {
        key: 'services',
        payload: formData
    }

    store.dispatch('postFormData', data)
        .then((data) => {
            store.dispatch('getData', 'services');
            alert('Successfully Created!');
        }).catch((e) => {
            alert('Unable to create new data.');
        });

}

function updateData(id){

    const form = document.querySelector('form#updateService');

    let formData = new FormData(form);

    const data = {
        key: `services/${id}`,
        payload: formData
    }

    store.dispatch('updateFormData', data)
        .then((data) => {
            store.dispatch('getData', 'services');
            alert('Successfully Updated!!!');
        }).catch((e) => {
            alert('Unable to update data!!!');
        });
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
.section-title{
    text-align: center;
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