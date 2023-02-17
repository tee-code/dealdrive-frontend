<template>
    <div>
        <div class="d-flex flex-row justify-content-between">
            <h1 class="section-title">Blog Section</h1>
            <button class="info bg-primary text-white border-0 px-4 mb-2" @click="toggleModal(0)">Create Post</button>
            
            <BaseModal v-if="showModal && currentModalIndex == 0" @closeModal="toggleModal(0)">

                    <h1 class="title">Create Post</h1>

                    <form id="createPost" @submit="createData">

                    <input name="image" type="file" accept="image/*"  placeholder="Choose image">
                    
                    <label>Title</label>
                    <input name="title" type="text" placeholder="Title">
    
                    <label>Description</label>
                    <input name="description" type="text" placeholder="Description">
    
                    <label>Date</label>
                    <input name="date" type="date" placeholder="Date">
    
                    <label>Category</label>
                    <input name="category" type="text" placeholder="Category">
                    
                    <label>User Profile Name</label>
                    <input name = "username" type="text" placeholder="User profile name">
    
                    <label for="avatar">User image</label>
                    
                    <input id="avatar" name="avatar" type="file" placeholder="Chose image" accept="image/*">

                    <button type="submit" class="success">Save</button>

                </form>

            </BaseModal>
        </div>
        <table style="width:100%">
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
                <th>Category</th>
                <th>Image</th>
                <th>User profile name</th>
                <th>User profile image</th>
                <th>Actions</th>

            </tr>


            <tr v-for="post in posts" :key="post.id">
                <td>{{post.id}}</td>
                <td>{{post.title}}</td>
                <td>{{post.description}}</td>
                <td>{{post.date}}</td>
                <td>{{post.category}}</td>
                
                <td><img style="width:100px; hieght:100px" :src='post.image' alt=""></td>

                <td>{{post.userProfile.name}}</td>
                <td><img style="width:100px; hieght:100px" :src='post.userProfile.image' alt=""></td>

                <td>
                   <div class="button-section">
                        <button class="info" @click="toggleModal(post.id)">Edit</button>
                        <button class="danger" @click="deleteData(post.id)" >Delete </button>
                    </div> 
                </td>

                <BaseModal key="post.id" v-if="showModal && currentModalIndex == post.id" @closeModal="toggleModal(post.id)">

                    <h1 class="title">Post Edit Form {{post.title}}</h1>    

                    <form id="updatePost" @submit.prevent="updateData(post.id)">
                        
                        <img :src="post.image" alt="Current Image" width="100" height="100" />
                        
                        <input name="image" type="file" accept="image/*"  placeholder="Choose image">
                
                        <label>TItle</label>
                        <input name="title" type="text" placeholder="Title" :value="post.title">

                        <label>Description</label>
                        <input name="description" type="text" placeholder="Description" :value="post.description">
                        
                        <label>Date</label>
                        <input name="date" type="date" placeholder="Date" :value="post.date">
                        
                        <label>Category</label>
                        <input name="category" type="text" placeholder="Category" :value="post.category">
        
                        <label>User Profile Name</label>
                        <input name = "username" type="text" placeholder="User profile name" :value="post.userProfile.name">
                        
                        <img :src="post.userProfile.image" alt="Current Image" width="100" height="100" />

                        <label for="avatar">User image</label>
                        
                        <input id="avatar" name="avatar" type="file" placeholder="Chose image" accept="image/*">
    
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

const posts = computed(() => {
    return store.state.posts;
});

// console.log(services, ' services')

store.dispatch('getData', 'posts');


let showModal=ref(false);

let currentModalIndex = ref(null);

function toggleModal(id) {

    currentModalIndex.value = id;

    showModal.value = !showModal.value;

    // console.log(showModal, currentModalIndex.value);

}

function deleteData(id){

    store.dispatch('deleteData', `posts/${id}`)
        .then((data) => {
            store.dispatch('getData', 'posts');
            alert('Deleted Successfully!');
        }).catch((e) => {
            alert('Uable to delete data');
        });
}

function createData(e){

    e.preventDefault();

    const form = document.querySelector('form#createPost');
    
    let formData = new FormData(form);

    const data = {
        key: 'posts',
        payload: formData
    }

    store.dispatch('postFormData', data)
        .then((data) => {
            store.dispatch('getData', 'posts');
            alert('Successfully Created!');
        }).catch((e) => {
            alert('Unable to create new data.');
        });

}

function updateData(id){

    const form = document.querySelector('form#updatePost');

    let formData = new FormData(form);

    const data = {
        key: `posts/${id}`,
        payload: formData
    }

    store.dispatch('updateFormData', data)
        .then((data) => {
            store.dispatch('getData', 'posts');
            alert('Successfully Updated!!!');
        }).catch((e) => {
            alert('Unable to update data!!!');
        });
}

</script>



<style scoped>
div> h1{
    text-align: center;
}


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
label{
    display: block;
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