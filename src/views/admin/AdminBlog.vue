<template>
    <div>
        <h1>Blog section</h1>
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


            <tr>
                <td>1</td>
                <td>EIGHT STRATEGIES FOR BUSINESS GROWTH</td>
                <td>Build A Brand</td>
                <td>02/ 08/ 2022</td>
                <td>Business</td>
                
                <td><img style="width:100px; hieght:100px" src='/assets/images/post/post-landscape-2.jpg' alt=""></td>

                <td>Wade Warren</td>
                <td><img style="width:100px; hieght:100px" src='/assets/images/me.png' alt=""></td>

                <td>
                   <div class="button-section">
                        <button class="info" @click="toggleModal">Edit</button>
                        <button class="danger" >Delete</button>
                     </div> 
                </td>
            </tr>
           

        </table>


        <BaseModal v-show="showModal" @closeModal="toggleModal">
            <h1 class="title">Blog Edit Form</h1>

            <form action="">
                
                <input type="text" placeholder="Id">
                
                <input type="text" placeholder="Title">

                <input type="text" placeholder="Description">

                <input type="date" placeholder="Date">

                <input type="text" placeholder="Category">

                <input type="file" placeholder="Chose image">

                <input type="text" placeholder="User profile name">

                <label for="">User image</label>
                <input type="file" placeholder="Chose image">
                
            </form>
        </BaseModal>
    </div>
</template>

<script setup>
import { ref } from "vue";
import BaseModal from '../../components/BaseModal.vue';

let showModal=ref(false)

    function toggleModal() {
        showModal.value = !showModal.value
        console.log(showModal)
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