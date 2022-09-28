<template>
    <div>
        <h1>About section</h1>
        

        <table style="width:100%">
            <tr>
                <th>Heading</th>
                <th>Short Description</th>
                <th>Lists</th>
                <th>Image</th>
                <th>Actions</th>
            </tr>

            <tr>
                <td>Dealdrive Technology - your one-stop shop for your digital solution</td>
                <td>We believe there is a software solution to every hard craked experience in a brand. What we do is to ease the experience.</td>

                <td>"We build custom applications that will optimize your daily business operations.</td>

                <td><img style="width:100px; hieght:100px" src="/assets/images/about.jpg" alt=""></td>
                <td>
                   <div class="button-section">
                        <button class="info" @click="toggleModal">Edit</button>
                        <button class="danger" >Delete</button>
                     </div> 
                </td>
            </tr>

            
        </table>


        <BaseModal v-show="showModal" @closeModal="toggleModal">
            <h1 class="title">About edit form</h1>

            <form action="">
                <input type="file" placeholder="Chose image">
                <input type="text" placeholder="About Heading">
                <input type="text" placeholder="Short description">

                <textarea name="" id="" cols="30" rows="10" placeholder="Main content list"></textarea>

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
                console.log(showModal)
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