<template>
    <div>
        <h1>Slides section</h1>
       <table style="width:100%">
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Caption</th>
                <th>Image</th>
                <th>Actions</th>
            </tr>

            <tr>
                <td>0</td>
                <td>GET MORE DONE WITH OUR SOFTWARE SOLUTIONS</td>

                <td>Accelerate your digital transformation with our branding and software development solutions</td>
                <td><img style="width:100px; hieght:100px" src='/assets/images/hero-carousel/1.jpg' alt=""></td>
                <td>
                   <div class="button-section">
                        <button class="info" @click="toggleModal">Edit</button>
                        <button class="danger" >Delete</button>
                     </div> 
                </td>
            </tr>


            <tr>
                <td>1</td>
                <td>Particpate in Our Training</td>

                
                <td>Dealdrive Technology Skillup programs is a digital skill acquisition program that train you to be master of tech related skills in the field of design, software and web application</td>
                <td><img style="width:100px; hieght:100px" src='/assets/images/page-header.jpg' alt=""></td>
                <td>
                   <div class="button-section">
                        <button class="info" @click="toggleModal">Edit</button>
                        <button class="danger" >Delete</button>
                     </div> 
                </td>
            </tr>


            

        </table>
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
import BaseModal from '../../components/BaseModal.vue';
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