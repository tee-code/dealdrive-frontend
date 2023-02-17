<template>
    <div>
        <div class="d-flex flex-row justify-content-between">
            
            <h1 class="section-title">Team Section</h1>

            <button class="info bg-primary text-white border-0 px-4 mb-2" @click="toggleModal(0)">Create Team</button>
            
            <BaseModal v-if="showModal && currentModalIndex == 0" @closeModal="toggleModal(0)">

                <h1 class="title">Create Team</h1>

                <form id="createTeam" @submit="createData">

                    <input name="image" type="file" accept="image/*"  placeholder="Choose image" @change="handleFileUpload( $event )">
                            
                    <input name="title" type="text" placeholder="Title">

                    <input name="name" type="text" placeholder="Full Name">

                    <input name="facebook" type="text" placeholder="Facebook Username">
                    
                    <input name="twitter" type="text" placeholder="Twitter Username">

                    <input name="instagram" type="text" placeholder="Instagram Username">

                    <input name="linkedin" type="text" placeholder="Linkedin Username">

                    <button type="submit" class="success">Save</button>

                </form>

            </BaseModal>
        </div>
        <div class="table-responsive">
            <table class="table" style="width: auto">
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Facebook</th>
                    <th>Twitter</th>
                    <th>Instagram</th>
                    <th>Linkedin</th>
                    <th>Actions</th>
                </tr>
    
                <tr v-for="team in teams" :key="team.id">
                    <td>{{team.id}}</td>
                    <td>{{team.title}}</td>
                    <td>{{team.name}}</td>
    
                    <td><img style="width:100px; hieght:100px" :src='team.image' :alt="team.name+ ' Image'"></td>
                    <td v-for="social in team.socials" :key="social.name">{{social.profile}}</td>
                    
                    <td>
                       <div class="button-section">
                            <button class="info" @click="toggleModal(team.id)">Edit</button>
                            <button class="danger" @click="deleteData(team.id)">Delete</button>
                         </div> 
                    </td>
                     <BaseModal v-if="showModal && currentModalIndex == team.id" @closeModal="toggleModal(team.id)">
                        <h1 class="title">Team Edit Form {{team.title}}</h1>
                        <form id="updateTeam" @submit.prevent="updateData(team.id)">

                            <div class="mb-3">

                              <label for="exampleInputEmail1" class="form-label">Profile Image</label>
                              <img class="form-control-sm" :src="team.image" alt="Current Team Image" width="100" height="100">
    
                            <input name="image" type="file" accept="image/*"  placeholder="Choose image" @change="handleFileUpload( $event )">
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Title</label>
                                <input class="form-control" name="title" type="text" placeholder="Title" :value="team.title" />
                                
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Full Name</label>
                                <input class="form-control" name="name" type="text" placeholder="Full Name" :value="team.name" />
                
                            </div>
                            <div class="mb-3" v-for="social in team.socials" :key="social.name">
                                <label for="exampleInputEmail1" class="form-label">{{ social.name }}</label>
                                <input :name="social.name" type="text" :placeholder="social.name +  ' Username'" :value="social.profile"/>
                            </div>
                           
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </BaseModal>
                </tr>
    
            </table>
        </div>
    </div>
</template>

<script setup>

import {computed, ref} from 'vue'
import { useStore } from 'vuex';
import BaseModal from '../../components/BaseModal.vue';

const store = useStore();

const teams = computed(() => {
    return store.state.teams;
});

store.dispatch('getData', 'teams');


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

function deleteData(id){

    store.dispatch('deleteData', `teams/${id}`)
        .then((data) => {
            // console.log(data, ' data ');
            store.dispatch('getData', 'teams');
            alert('Deleted successfully!');
        }).catch((e) => {
            // console.log(e);
            alert('Unable to delete.');
        });
}

function createData(e){

    e.preventDefault();

    const form = document.querySelector('form#createTeam');
    
    let formData = new FormData(form);

    const data = {
        key: 'teams',
        payload: formData
    }

    store.dispatch('postFormData', data)
        .then((data) => {
            // console.log(data, ' data ');
            store.dispatch('getData', 'teams');
            alert('Created Successfully!!!');
        }).catch((e) => {
            // console.log(e);
            alert('Unable to create!!!');
        });

}

function updateData(id){

    const form = document.querySelector('form#updateTeam');
    
    let formData = new FormData(form);

    const data = {
        key: `teams/${id}`,
        payload: formData
    }

    store.dispatch('updateFormData', data)
        .then((data) => {
            // console.log(data, ' data ');
            store.dispatch('getData', 'teams');
            alert('Successfully Updated!!!');
        }).catch((e) => {
            // console.log(e);
            alert('Unable to update');
        });

}


</script>

<style scoped>
table.table { width:auto; }
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
    
    margin: 2em 0;
    padding: 1em;
    border: none;
    
}

form input::placeholder{
    position: absolute;
    top: 4%;
    color: red;
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