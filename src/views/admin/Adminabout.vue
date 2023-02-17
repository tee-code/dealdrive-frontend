<template>
    <div>
        <div class="d-flex flex-row justify-content-between">

            <h1 class="section-title">About Us Section</h1>
            
            <button v-if="! abouts" class="info bg-primary text-white border-0 px-4 mb-2" @click="toggleModal(0)">
                Create About Us
            </button>
            
            <BaseModal v-if="showModal && currentModalIndex == 0" @closeModal="toggleModal(0)">

                <h1 class="title">Create About US</h1>

                <form id="createAboutUs" @submit="createData">

                    <input name="image" type="file" accept="image/*"  placeholder="Choose image" @change="handleFileUpload( $event )">
                        
                    <label>About Heading</label>
                    <input name="heading" type="text" placeholder="About Heading">
                    
                    <label>Short Desc</label>
                    <input name="short_desc" type="text" placeholder="Short description">

                    <div v-for="(list,index) in [1,2,3,4]" :key="list">
                        <label>{{ 'List ' +(index+1) }}</label>
                        <textarea  :name="'list_'+(index+1)" id="" cols="30" rows="10" :placeholder="'List ' +(index+1)"></textarea>

                    </div>

                    <button type="submit" class="success">Save</button>

                </form>

            </BaseModal>

        </div>

        <table style="width:100%">
            <tr>
                <th>Heading</th>
                <th>Short Description</th>
                <th>Lists</th>
                <th>Image</th>
                <th>Actions</th>
            </tr>

            <tr v-for="about in abouts" :key="about">
                <td>{{about.heading}}</td>
                <td>{{about.short_desc}}</td>
                <td>
                    <p v-for="list in about.list" :key="list">
                        {{ list }}
                    </p>
                </td>
                

                <td><img style="width:100px; hieght:100px" :src="about.image" alt="About us image"></td>
                <td>
                   <div class="button-section">
                        <button class="info" @click="toggleModal(about.id)">Edit</button>
                        <button class="danger" @click="deleteData(about.id)">Delete</button>
                     </div> 
                </td>
                <BaseModal v-if="showModal && currentModalIndex == about.id" @closeModal="toggleModal(about.id)">
                    <h1 class="title">About Us Edit Form </h1>

                    <form id="updateAboutUs" @submit.prevent="updateData(about.id)">
                        
                        <img :src="about.image" alt="Current Slide Image" width="100" height="100">

                        <input name="image" type="file" accept="image/*"  placeholder="Choose image" @change="handleFileUpload( $event )">
                        
                        <label>About Heading</label>
                        <input name="heading" type="text" placeholder="About Heading" :value="about.heading">
                        
                        <label>Short Desc</label>
                        <input name="short_desc" type="text" placeholder="Short description" :value="about.short_desc">

                        <div v-for="(list,index) in about.list" :key="list">
                            <label>{{ 'List ' +(index+1) }}</label>
                            <textarea  :name="'list_'+(index+1)" id="" cols="30" rows="10" :placeholder="'List ' +index+1" :value="list"></textarea>

                        </div>
                        
                        <button type="submit" class="success">Save</button>

                    </form>
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

const abouts = computed(() => {
    return store.state.about;
});

store.dispatch('getData', 'about');

let showModal=ref(false);

let currentModalIndex = ref(null);


// function handleFileUpload(event){
//     about.image = event.target.files[0];
// }


function toggleModal(id) {

    currentModalIndex.value = id;

    showModal.value = !showModal.value;

    // console.log(showModal, currentModalIndex.value);

}

function deleteData(id){

    store.dispatch('deleteData', `removeAboutUs/${id}`)
        .then((data) => {
            store.dispatch('getData', 'about');
            alert('Deleted Successfully!!!');
        }).catch((e) => {
            alert('Unable to delete.');
        });
}

function createData(e){

    e.preventDefault();

    const form = document.querySelector('form#createAboutUs');

    let formData = new FormData(form);

    const data = {
        key: 'about',
        payload: formData
    }

    store.dispatch('postFormData', data)
        .then((data) => {
            // console.log(data, ' data ');
            store.dispatch('getData', 'about');
            alert('Created Successfully!!!');
        }).catch((e) => {
            // console.log(e);
            alert('Unable to create!!!');
        });

}

function updateData(id){

    const form = document.querySelector('form#updateAboutUs');
    
    let formData = new FormData(form);

    const data = {
        key: `updateAboutUs/${id}`,
        payload: formData
    }

    store.dispatch('updateFormData', data)
        .then((data) => {
            
            store.dispatch('getData', 'about');
            alert('Successfully Updated!!!');
        }).catch((e) => {
            alert('Unable to update.');
            // console.log(e, "inside data");
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